16/10/2019:
- Creating a user authentication application
    - Things to notice:
            - Separate folder for routes — instead of all routes declared in index.js — containing:
                    - auth.js == set up a router (which will be exported at the bottom). This is needed since the routes are no longer DECLARED IN THE APPLICATION, you need to create a router that will have all the routes in it.  This router will then be IMPORTED in index.js ( to be used by the application ) as a middleware… UPDATE ON UNDERSTANDING NEEDED!!
                                - Routers are used INSIDE of an application??
                        - using Node’s module.exports , we export the router. 
                        - In index.js , importing the file that contains the router is equivalent to getting all of the routes inside of that router… which allows us to use the routes at specific URL
                                - This is done by using app.use()  which is basically saying “HEY APPLICATION! Use these routes at this URL.” Of course, the path of the route will be added in front of the URL
            - Used Postman to test route in the router (simple GET request)
                    - URL consisted of path from app.use() for that router + the endpoint URL
                    - Worked!
            - Connecting to DB
                    - Using mongoose, we will create model
                    - In index.js we import mongoose module and then use connect method of it.
                        - In this we give it the database’s URL, other options and a callback function
            - Now we need to create the Schema which has to be exported as a model so that it can be used in routes
                    - Done
    - So far, we created a backend application on a Node server using Express framework for routing & Mongoose to create models in MongoDB
            - We also used dotenv to load environment variables
            - Notice how routes are not defined in index.js
                    - This means that we didnt define the routes in the application. We defined them in a router which is then imported into index.js FOR THE APPLICATION TO USE at a specific URL
            - We also created a model for user info



- express() is the top-level function in the express module… which then has its methods (like express.static(), express.Router() creates a router object [which is only capable of performing middleware & routing function] )
    - Middleware func. = ones that have access to res & req objects, and another middleware func.,  next()

17/10/2019:
Carrying on from 16/10/2019:
- Creating a user authentication application
    - MongoDB won’t work; 
		- Got it working by reinstalling MongoDB using brew
    - In conclusion, we create a POST request in auth.js for register feature. In this we used the User model. However one thing I did notice was the sequence in which operations were done. For example, I first checked for documents using the User model to see if existing accounts used the email coming from req.body. If this was true, we used a return statement to stop the execution of rest of code
            - Next, we hashed the password form req.body and saved it in a variable which then is passed inside Model constructor for password to be saved for that account.
            - Lastly, we use a try/catch statement to save a document using User model constructor. We also added a response which send back the new user info to the client.
        - Note that I did use Joi for validation but somethings wrong so Ill look into fixing that

19-20/10/2019:
Carrying on from 17/10/2019:
- Creating the Login route which also generates JWT token 
        - For this route, we first checked the User model to see if an account existed, using the email from request body. If no account based on the email existed, then a return statement was executed (which stops execution of rest of code)
            - Then, we compare the password entered with the password for the intended user account. If not matched, return statement which sends back a response for error is executed. This uses bcrypt’s compare ability.
            - Then we also create and assign a token using the _id of the user account as payload, and a secret key. This code is then placed in the RESPONSE’s header under the key ‘auth-token’

- Don’t forget about looking into user validation (for /register & /login)


01/12/2019:
- Created route with GET request to obtain data on economic indicators from Canada Gov't
- Website: https://api.canada.ca/en/homepage