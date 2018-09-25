'use strict';

// We’re setting up an extremely simple server here.
const http = require('http');

// These could (should) be set as env vars.
const port = process.env.PORT || 5001;
const host = 'localhost';				                  // - runs only under proxy (and localhost)
//const host = process.env.HOST || 'localhost';		// - runs only under proxy (and localhost)
//const host = '104.248.37.108' || 'localhost'; 	// - runs only under proxy (and localhost)	
//const host = process.env.HOST || '104.248.37.108'; 	// - runs only under HOST+PORT
//const host = '104.248.37.108'; 			                // - runs only under HOST+PORT

// No matter what hits the server, we send the same thing.
http.createServer((req, res) => {

  // Tell the browser what’s coming.
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
  });

  // Send a simple message in HTML.
  res.write('<h1>jlengstorf/tutorial-deploy-nodejs-ssl-digitalocean-app</h1>');
  res.write('<p>running on <em>port 5000</em>.</p>');
  res.end();
}).listen(port, host);

// This message prints in the console when the app starts.
console.log(`App running at http://${host}:${port}`);
