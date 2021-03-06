# login-microservice
A microservice for Jesus' online market. In its current implementation, this microservice creates an Express server, which also holds user data. It handles the information submitted for the login form and for the user creation page. It handles a POST requests for the user login and new account creation. 

## Deployment
This is a microservice currently set up to run on a local computer. With its current seetings, it is set to run at http://localhost:4000. Because the main project is also set to work at the local level, there may be issues running this program. Specifically, the requests may be blocked by CORS policy. To get around this issue, deploy the applications on Chrome, and install an extension (e.g., Moesif CORS) that enables the user to get around this issue. Note: Remember to turn the extension back off after running the program for security reasons.

## GET request handler
The Express app is setup to receive the POST request for user login at "http://localhost:4000/sign-in." A JSON string is sent in the request, where the server will parse the request, and then compare usernames and passwords to find a matching pair. Depending whether the user is found and password is correct, a message is sent back to the original application.

## POST request handler
The POST method, on the other hand, receives user data, including name, username, email, and password. This is done through a fetch() method, sending JSON data in the following way: 

## Contributing
Pulls requests are always welcome. For any major modifications or additions, please open an issue first to discuss any desired changes. Thanks!
