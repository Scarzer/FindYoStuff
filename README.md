# RESTful API Server

Started out by following a tutorial, I am starting to take my own direction with it. But of course there really to much that I can do with it.


## Todo
* Full integration with MongoDB
* Split up routes into seperate file
* Make a general, robust interface
* Find time!!!



## API Version 0

### POST

* /tag/
- You can not preform anything in this situation. An error will be returned

* /tag/:id
- This will create a new tag in the current running instance of the server.

### GET

* /tag/
- This will return a JSON with ALL current tags that are saved in the current instance.
JSON files are in the format:
``` javascript
    {
        "#" : {
            "name" : [tag] + #,
            "number" : ######,
            "lastLoc" : ######,
            "timeAdded" : [UTC TimeStamp]
        }
    }
```

* /tag/:id
- This will return a single JSON of the specified ID number!
