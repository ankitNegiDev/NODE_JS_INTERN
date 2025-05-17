// node notes..
/**
 * browser have two engine -> layout and js engine..
 * node is not a library or framework
 */

// usecase of node js
/**
 * running js outside browser env
 * creation of server
 * to creaate cli
 * to create native application (desktop application)
 */

// npm
/**
 ** cpm -> central package manager ...
 */

//todo => diff b/w browser and node
/**
 * name of gloabl obj in broser is windo and in node iti s  global object
 * browser dose not have access to file system , where as node js have file system access.
 * browser have dom realted apis (document) where as node does not have dom apis.
 */

// for a node project...
/**
 * npm init -y --- package.json.
 */


// type= commanjs for comman js moduling .... don't wana set type= module for es6 moduling then use .mjs (to get es6)
// in require file extension are not required..
// require like this const fs=require('fs') then these are part of node or either externally installed..
// but requrie like this const f=require('./index') -> this means we are requring the file..



// if key are value and same then we can ommit the key...


// ------------------------------ DAY-2----------------------------------------

// file system..
/*
* any file and folder that is inside our system and we are able to do read , update , write (crud part)
in file system we have data redundency... which causes various problem like (security , incorrect data problem ,replication of data and so on..)
just becoz of this we have something called databases.
*/

// Databases ...
/**
 * (1) 
 */

// CRUD in file system...
/**
 * initialize file system...
 * we can directly use fs (no need to install) and we can start crud operation on file..
 */

// steps ----

/**
 ** (1) requirese file system..
 */

//  writeFileSync ---> overwrite the data ....
// readFileSync ---
//



// ARTICTURE OF NODE.JS
/**
 ** client server articture...

 * when a request comes to a server then it goes to the event queue... these operation can be of only two type .. (1) blocking operatioin , (2) non-blocking operaton..
 * all the request which are in event queue these request will be checked by event loop ....
 * all blocking operation are sync in nature..
 * all non-blocking operation are async in nature...
 * if request is async in nature then we will get output on spot ( Async requests return immediately, but the actual output comes via a callback/promise/event, not “on the spot.)....where as ..
 * if request is sync in nature then that blocking request will go into the thread pool(main thread) only if worker thread is present ... and once task is done by wroker thread then response is returned..
 ** by default we have 4 worker threads...
 * if all worker thread are busy and we have another blocking request then our application will be slow and it show reload or buffer...
 ** we can increae these thread it depend on ---- cpu
 * this is how we can do ...
    const os = require('os');
    console.log("core length : ",os.cpus().length);
 */

//  all the function with sync are blocking in nature ...


// http
/**
 ** it stand for http -> hypter text transfer protocol... we have lot of protocols...like http, https, web-socket..
 * protocol means a way of communication..
 * once we require http that return a object and it have multiple function and one of them is http.createServer() that accept a callback function..and this callback function is called request listener
 ** if we want our server automatically saved the update then we have a package called nodemon.
 * to install it just do `npm i nodemon`
 */

// for local installation of node mon ->
/**
 * npm install --save-dev nodemon
 * npx nodemon index.js
 */

// request object
/**
 * request is object and inside it there are multiple object... like body , header and so on...
 ** (1) body
 ** (2) headers
    * extra info like about cookies..
 ** (3) query
    * http://localhost:3000/?name="ankit"
 ** (4) params
    * http://localhost:3000/ankit <- params.
 */

// Request Object Structure in Express.js

/**
 * The `request` object in Express contains important info about the incoming HTTP request:
 * 
 * (1) req.body
 *     - Contains data sent in the body of the request (usually in POST/PUT)
 *     - Requires body-parsing middleware like `express.json()` or `express.urlencoded()`
 * 
 * (2) req.headers
 *     - Contains metadata like content types, authentication tokens, cookies, etc.
 *     - Example: req.headers['authorization']
 * 
 * (3) req.query
 *     - Contains query string parameters (after `?` in URL)
 *     - Example URL: http://localhost:3000/?name=ankit
 *     - Access: req.query.name
 * 
 * (4) req.params
 *     - Contains route parameters defined in the URL path
 *     - Example route: /user/:username → URL: /user/ankit
 *     - Access: req.params.username
 */

// url ->
/**
 * http:// <- protocol
 * localhost:300 <- domain.
 * /ankit <- path or parms
 * ?name="ankit" <- query
 */

// what is domain...
/**
 * localhost:3000 , ip address of any web-site...
 */


// ------------- day 3   HTTP Methods-----------------

/**
 ** (1). get-> to get data
 ** (2). post -> sending data or submiting the data or changing on server..
 ** (3) put -> for complete updation
 ** (4) patch -> for partial updation..
 ** (5) delete -> to delete something or remove something...
 */

//  by default our browser hit -> get request
// in form we can send only get and post request..

// Expressor server ...
/**
 * express is a framework for node.js not of node.js
 * express is a framework which is used to create server and behind the secne it uses the http and it has very good compatibility with node.js.
 * then we create express server...
 * best pratics is return ..... before res.send
 * when ever we hit post request then data sent by post request will be present in request.body...
 */

// home , about , profile



// restfull api..
/**
 * rest stand for -> reperesntation state transfer
 * it is a articture or simply a way of writing code..
 */

// ** rest api -.. means some exanchange of data will hapening..
// ** restful routing..means some page creation will be hapening..


/**
📝 Blog Routes and Their HTTP Methods

Route Name	URL	        HTTP Verb	      Description
Index	   /blogs	        GET	            Display a list of all blogs
New	      /blogs/new        GET	            Show form to make new blogs
Create	  /blogs	        POST	        Add new blog to database, then redirect
Show	 /blogs/:id	        GET	            Show info about one blog
Edit	  /blogs/:id/edit	GET	            Show edit form of one blog
Update	/blogs/:id	        PUT	            Update a particular blog, then redirect
Destroy	/blogs/:id	        DELETE	        Delete a particular blog, then redirect
 */

//  by seeeing method , path -> we understand the task uing rest full api..



// ----------------------DAY 4---------------------------


// middle ware 
/**
 * a middleman b/w client and server.
 * it is a function and runs in b/w two things.. not always b/w client and server.
 * it always runs on every incoming request irrespecitve of path and methods. koi bhii path ho koi bhii request ho.. 
 * midddle ware is middle man b/w req and response. like isp is middle man b/w client(we) and server (jio)
 * middleware can be any no..
 * any middleware can stop the request and return a responsoe of no..
 ** sending response inside the middle ware is big no...
 * we can add papth to restrict a middle ware to run on a particualr path for every method/request.
 */

// syntax of middle ware..
/**
 * middleware are also normal function ... and these function have access of three things 1 request object, response object and next function or next middleware.
 * eg => const varify = (req,res,next,error)=>{}
 */

// types of middleware ..
/**
 ** (1) userdefined...
 ** (2) predefined.. or prebuilt.
 */

//  url
/**
 * url -> req.params -> for path parameter. /:
 * req.query -> to get query ... ? key=value
 * req.body ->
 * by default request body is undefined...either we sent data or not .. but to see the data we use a pre-built middle ware which is express.json..
 * if we are using pre-built middleware then it is of like app.use(express.json);
 */


// Data base -------------

// sql
/**
 * relational , table format
 * the sql databases that uses sql langaue are called sql databases.
 * sql databases are called schemafull database.
 */

// no-sql
/**
 * non-relation , document format.
 * the databases that does not use sql language are called non-sql databases.
 * no squal is called schemaless databases.
 * inside the db there can be multiple collections and inside collection there can be multipe document.
 * multiple document form  one collections
 */

// mongodb.
/**
 * data stored in mongodb database in document in the form of json.
 */

// db commands
/**
 * show dbs  == > to see all the dbs..
 * use databaseName => to use that database. and to create a database with that name if it does not exist.
 * show collections => to see all the collections
 * db.createCollections('name of collection')
 * db.collectionName.drop()
 *! db.dropDatabase() 
 */

//  crud on mongodb..

/**
 * db.use -> 
 * db.createCollection()
 * show collections
 * db.collectionName.insertOne({key:"value",key:"vlaue",})
 * db.collectionName.insertMany({key:"value1",key:"value"},{key:"vlaue1",key:"value2"},{key:"vlaue",key:"value"})
 * db.collectionName.find() = to get all documents of a collection
 ** update ...
 * db.collectionName.updateOne({key:"vlaue"}(on what basis we want to change),{$set:{key:"value",key:"value"}}(new value))
 ** delete...
 * db.collectionName.deleteOne({key:"value"})
 */

//  all db-method return a promise ..