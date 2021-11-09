//a module with functions or objects or variables assigned to it
const express = require('express')
//function is used to mount the specified middleware function(s) at the path
//which is being specified
const app = express()
//This app starts a server and listens on port 3000 for connections
const port = 4000
//package for providing a Connect/Express middleware that can be used to enable CORS with various options
const cors = require('cors');
//responsible for parsing the incoming request bodies in a middleware before handling it
const bodyParser = require("body-parser");
// include mongoose in a project
const mongoose = require('mongoose');


//will enable the express server to respond to preflight requests. 
//A preflight request is basically an OPTION request sent to the server before the actual request is sent, in order to ask which origin and which request options the server accepts
app.use(cors());

// request object ( req ), the response object ( res ), and the next function in the application's request-response cycle.
//The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware
app.use(function (req, res, next) {
    //an Access-Control-Allow-Origin response header to tell the browser that the content of this page is accessible to certain origins
    res.header("Access-Control-Allow-Origin", "*");
    //indicate which methods to use
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();//It passes control to the next matching route
});

//parse application/www-form-urlencoded
//The extended option allows to choose between parsing the URL-encoded data 
//with the querystring library (when false) or the qs library (when true). 
//The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, 
//allowing for a JSON-like experience with URL-encoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

//function define a route handler for GET requests to a given URL
app.get('/', (req, res) => {
    //This function accepts a single parameter body that describe the body
    // which is to be sent in the response
    res.send('Hello World!')
})

//connect to MongoDB using connection string (change password and db name)
const myConnectionString = 'mongodb+srv://admin:Kasica11@cluster0.qjgmc.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//definning schema and making a model
const Schema = mongoose.Schema;
//type of data stored in db
var movieSchema = new Schema({
    title: String,
    year: String,
    poster: String,
});

//new model for db with movie collection in movieSchema
var MovieModel = mongoose.model("movie", movieSchema);

//function define a route handler for GET requests to a given URL (JSON)
app.get('/api/movies', (req, res) => {
    //creates variable with movies json data
    // const mymovies = [
    //     {
    //         "Title": "Avengers: Infinity War",
    //         "Year": "2018",
    //         "imdbID": "tt4154756",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Captain America: Civil War",
    //         "Year": "2016",
    //         "imdbID": "tt3498820",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "World War Z",
    //         "Year": "2013",
    //         "imdbID": "tt0816711",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "War of the Worlds",
    //         "Year": "2005",
    //         "imdbID": "tt0407304",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    //     }
    // ];

    //find all documents in db
    //find() method is used to select documents in a collection and return a cursor to the selected documents. 
    //Cursor means a pointer that points to a document, when we use find() method it returns a pointer on the selected documents and returns one by one
    MovieModel.find((err, data) => {
        res.json(data);
    })

    //method listens for get request
    app.get('/api/movies/:id', (req, res) => {
        console.log(req.params.id);
        //returns movies id
        //findById() function is used to find one document by its _id
        MovieModel.findById(req.params.id, (err, data) => {
            res.json(data);
        })
    })

    //function define a route handler for POST requests using the BODY
    app.post('/api/movies', (req, res) => {
        //This function sends movie data in the response
        console.log('Movies recieved');
        console.log(req.body.title);
        console.log(req.body.year);
        console.log(req.body.poster);

        //write to db
        MovieModel.create({
            title: req.body.title,
            year: req.body.year,
            poster: req.body.poster,
        })
        //response send back to the client from server
        res.send('Item added')
    })

    //This function sends JSON data in the response 
    // res.status(200).json({
    //     message: "JSON object with movies",
    //     movies: mymovies
    // });
})//end app.get (define a route handler for GET requests to a given URL (JSON))


//used to bind and listen the connections on the specified host and port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})