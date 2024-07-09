1.  This is a node.js advanced project where I have built a contact list based on particular user, here I have covered the user’s registration and logged in, also current logged in user Api, Users can be able to create their contact lists, when user is going to logged in they can able to see their contacts with the help of access token.
2.  User can be able to edit and delete their contact list details, users are not authorized to edit and delete others contact list also they are not authorized to view others contact list, contact list can be accessible with the respective user bearer token after logged in.
3.  We have used MongoDB to store the data’s, JWT(Json web token) package to generate the access token based on the user, bcrypt to implement the hashing of the passwords, Express error handler as a middleware is used here also the express-async-handler to handle the try and catch block of controller logic.
4.  Endpoints: Users registration: localhost:8000/api/users/register | localhost:8000/api/users/login
5.  Contact api: localhost:8000/api/contacts/
6.  Dependency:
7.  "dependencies": {
8.       "bcrypt": "^5.1.1",
9.       "dotenv": "^16.4.5",
10.     "express": "^4.19.2",
11.     "express-async-handler": "^1.2.0",
12.     "jsonwebtoken": "^9.0.2",
13.     "mongoose": "^8.4.5"
14. }
