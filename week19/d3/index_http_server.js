const http = require('http');
const url = require('url');

const USERNAME = 'admin';
const PASSWORD = 'secret';

function http_request_handler(req, res) {
    // Parse the URL
    const parsedUrl = url.parse(req.url);
    
    // Extract credentials from "user:pass@" if present
    let user = null, pass = null;
    if (parsedUrl.auth) { // format: username:password
        [user, pass] = parsedUrl.auth.split(':');
        console.log(user,pass)
    }
    

    // Fallback to Authorization header
    const authHeader = req.headers['authorization'];
    if (!user || !pass) {
        if (authHeader && authHeader.startsWith('Basic ')) {
            const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString();
            [user, pass] = credentials.split(':');
            console.log(user,pass)
        }
    }

    if (user !== USERNAME || pass !== PASSWORD) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            // Extract the boundary from Content-Type header
            const contentType = req.headers['content-type'];
            const boundaryMatch = contentType.match(/boundary=(.+)$/);
            if (!boundaryMatch) {
                res.writeHead(400);
                res.end('No boundary in multipart data');
                return;
            }
            const boundary = '--' + boundaryMatch[1];

            // Split the body by boundary
            const parts = body.split(boundary).filter(part => part.trim() && part.trim() !== '--');

            for (const part of parts) {
                // Extract field name
                const nameMatch = part.match(/name="(.+?)"/);
                if (!nameMatch) continue;
                const fieldName = nameMatch[1];

                // Extract value (after double CRLF)
                const valueMatch = part.split('\r\n\r\n')[1];
                if (!valueMatch) continue;
                const value = valueMatch.trim();

                if (fieldName === 'event_log') {
                    try {
                        const data = JSON.parse(value);
                        // console.log('Parsed event_log:', data);
                        if(data.eventState == "active" && data.AccessControllerEvent && data.AccessControllerEvent.name){
                            console.log("")
                            console.log(data.AccessControllerEvent.serialNo)
                            console.log(data.AccessControllerEvent.name)
                            console.log(data.AccessControllerEvent.employeeNoString)
                            console.log(data)
                        }
                    } catch (err) {
                        console.error('Invalid JSON in event_log');
                    }
                }
            }

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Received');
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Send a POST request');
    }
}

const server = http.createServer(http_request_handler);
server.listen(5001, () => console.log('Server running on http://localhost:5001'));
