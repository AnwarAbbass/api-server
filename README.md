# api-server

## Deployment Test
Author: Anwar Abbass
[tests report]()
[front-end]()

## Setup
`.env` requirements
`cors`  requirements
`dotenv`  requirements
`express`  requirements
`morgan`  requirements
`uuid`  requirements
`jest`  requirements
`mongoose`  requirements
`supertest`  requirements
PORT - Port Number
MONGOOSE_URI - mongodb://localhost:27017/DB_NAME

## Running the app
- `npm start`
   - Endpoint: /
Returns Object

{
  you are in the home page
}

  - Endpoint: /api/v1/food/

Returns Object
```
localhost:3000/api/v1/food/

{
    "id": "c89686d4-d4cd-4410-943c-dde2ef133b85",
    "data": {
        "name": "burgger",
        "price": "7JD"
    }
}
```
  - Endpoint: /api/v1/clothes/

Returns Object
```
{
    "id": "c89686d4-d4cd-4410-943c-dde2ef133b85",
    "data": {
        "name": "Dress",
        "price": "7JD"
    }
}
```


## Tests
**Unit Tests**: `npm run test`
**Lint Tests**: `npm run lint`

UML
(Created with diagrams)
![uml]()

