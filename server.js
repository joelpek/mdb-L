// node API server for CRUD operations
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

//API Service
var mongoose = require('mongoose');
mongoose.connect('mongodb://joelpek:jepjep18@ds039351.mlab.com:39351/mongo1', { useNewUrlParser: true }/* process.env.MONGO_URI */)
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));

var Schema = mongoose.Schema;
var movieSchema = new Schema ({
  title: {type: String, required: true },
  id: Number,
  poster_path: String
})
var Movie = mongoose.model('Movie', movieSchema)

//create api route
var router = express.Router();
app.use('/api', router); //api root
app.use('/api/watchlist', router); // movie collection

//get watchlist
app.get('/api/watchlist', function(req, res) {
  Movie.find({}, function(err, watchlist) {
    if (err) {
      res.send(err);
    }
    res.json(watchlist);
  });
});

// post addition to watchlist
app.post('/api/watchlist', function(req, res) {
  console.log(req.query);
  var movie = new Movie();
  movie.title = req.query.title;
  Movie.find({title: movie.title}, function(err, movieRes) {
    console.log(movieRes)
    if (movieRes.length > 0) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Movie "' + movie.title + '" is already in watchlist!'});
    }else{
      movie.id = req.query.id;
      movie.poster_path = req.query.poster_path;
      movie.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Movie "' + movie.title + '" added to watchlist. Check localhost:5000/api/watchlist!' });
      });
    }
  });
});

// reset watchlist
app.delete('/api/watchlist', function(req, res) {
  Movie.deleteMany({}, function (err) {
    if (err) {
      res.send(err);
    }
    let response = {
      message: "Watchlist reset successful",
    };
    res.status(200).send(response);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, function() {console.log(`Listening on port ${port}`)});

// /* BEGIN PLAIN NODE SERVER CODE (alternative implementation for possible further development */

// var http = require('http');
// var fs = require('fs');
// var path = require('path');

// http.createServer(function (request, response) {
//     console.log('request ', request.url);

//     var filePath = '.' + request.url;
//     if (filePath == './') {
//         filePath = './index.html';
//     }

//     var extname = String(path.extname(filePath)).toLowerCase();
//     var mimeTypes = {
//         '.html': 'text/html',
//         '.js': 'text/javascript',
//         '.css': 'text/css',
//         '.json': 'application/json',
//         '.png': 'image/png',
//         '.jpg': 'image/jpg',
//         '.gif': 'image/gif',
//         '.wav': 'audio/wav',
//         '.mp4': 'video/mp4',
//         '.woff': 'application/font-woff',
//         '.ttf': 'application/font-ttf',
//         '.eot': 'application/vnd.ms-fontobject',
//         '.otf': 'application/font-otf',
//         '.svg': 'application/image/svg+xml'
//     };

//     var contentType = mimeTypes[extname] || 'application/octet-stream';

//     fs.readFile(filePath, function(error, content) {
//         if (error) {
//             if(error.code == 'ENOENT') {
//                 fs.readFile('./404.html', function(error, content) {
//                     response.writeHead(200, { 'Content-Type': contentType });
//                     response.end(content, 'utf-8');
//                 });
//             }
//             else {
//                 response.writeHead(500);
//                 response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
//                 response.end();
//             }
//         }
//         else {
//             response.writeHead(200, { 'Content-Type': contentType });
//             response.end(content, 'utf-8');
//         }
//     });

// }).listen(8125);
// console.log('Server running at http://127.0.0.1:8125/');