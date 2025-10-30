Guest
======
GET /index.html
return: 200 OK: index.html 

Guest
======
GET /login.html
return: 200 OK: login.html

Guest (DONE)
=====
GET /api/courses/
header: {}
1. return: 403 Forbidden. 
2. redirect to /login.html

Logged in User (DONE)
==============
GET /api/courses
header: {"session_id" : "fewfedgtrhrtegtre"}
return: 200 OK: [{....}]

GUEST
======
POST /api/login
if username and password match, 
    send session_id to use the next time
    return: 301: redirect to index.html
else: return 403. redirect to /login.html

