let persons = [
    {
        "id" : 1,
        "name" : "Abraham",
        "age" : 25
    }
] 

// GET /api/persons -> returns array of persons : 200 OK, 401 Not logged in, 403 not allowed, 404 not found
// POST /api/persons {
//        "name" : "Abraham",
//        "age" : 25
//    }  -> the new object created { id: 1, name: .... } : 201 Created
// 


// PATCH /api/persons/1 { // patch is changing only the things required
//        "age" : 30
//    } > 200 OK, 204 No content

// PUT /api/persons/1 { // PUT replaces the whole object
//        "name" : "Abraham",
//        "age" : 30
//    }

// DELETE /api/persons/1