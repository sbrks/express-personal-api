//note to annabelle/instructors: i didn't get far on this this weekend--I was away, and when I did begin I hit a few road bumps--but want to keep working on it on my own over the next week

// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//json bucket list items

var bucketList = [{
  //add bucket list objects

}];

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/sbrks/express_self_api/README.md", // CHANGE ME
    base_url: "http://sampi.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/bucket", description: "Gets a bucket list"},
      {method: "GET", path: "/api/profile", description: "Data about me"},
      {method: "POST", path: "/api/bucket", description: "Create a new bucket list item"},
      {method: "PUT", path: "/api/bucket", description: "Edit a bucket list item"},
      {method: "DELETE", path: "/api/bucket", description: "Remove a bucket list item"},
    ]
  })
});

  app.get('/api/profile', function api_profile (req, res) {
    res.json({
      name: "Sam Brooks",
      github_link: "https://github.com/sbrks",
      github_profile_image: "urlofgithubprofileimage", //change me
      current_city: "San Francisco, California",
      pets: "None, but am determined to get a rescue dog very soon"
    })
  });



  app.get('/api/bucket', function api_bucket(req, res) {
        res.json({
        bucketItem: "X",
        Deadline: "X"
    })
  });

    app.post('/api/bucket', function api_bucket(req, res) {
        res.json({
        bucketItem: "X",
        Deadline: "X"
    })
  });


      app.put('/api/bucket', function api_bucket(req, res) {
        res.json({
        bucketItem: "X",
        Deadline: "X"
    })
  });


    app.delete('/api/bucket', function api_bucket(req, res) {
        res.json({
        bucketItem: "X",
        Deadline: "X"
        })
  });

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
