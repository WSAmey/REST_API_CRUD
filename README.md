# REST_API_CRUD

REST api crud Back end project using node, express, mongoose, mongodb

In this project, CRUD operation is performed with mongodb, also we havr created some REST API's such as get(for fetching data),post(for posting the data),put(forr updating the existing data) and delete(for removing the data).

You can use thunder client(if you are using vs code) or Postman API for testing of api.

How to run project:

1. First download the project from  github and open it in your code editor(VS Code).
2. First create the database in your mongodb(compass) in order to perform the crud with REST API's.
3. Then post some data from json body from thunder client(vs code) or Postman API in order create the data in your data base.
4.  For create API use post method and enter the url that is commented in userRoute.js file inside routes folder.
5.  Hit the create api and there you go! you will see the data in your mongodb collection document.
6.  And one the create API method is done, now perform rest of other apis as well, make sure in case of params(check in route file),
   that is update and delete method, you need to pass the id of user (from mongodb collection document) in route for example http://localhost:5000/api/user/update/615000091
   for update and enter the keys and value pair in body in form of JSON to update the existing data, once you hit the api, you will see the data will be updated.
7. perform the same for delete api too. 
