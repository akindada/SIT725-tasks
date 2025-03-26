var express = require("express");
var app = express();

// Middleware to serve static files (HTML, JS, CSS)
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Dummy card data (Replace with actual data as needed)
const cardList = [
  {
    title: "Kitten",
    image: "images/kitten.jpg",  // Ensure the correct path for your image
    link: "About Kitten",
    description: "Demo description about kitten"
  },
  {
    title: "Kitten 2",
    image: "images/kitten-2.jpg",  // Ensure the correct path for your image
    link: "About Kitten 2",
    description: "Demo description about kitten 2"
  },
  {
    title: "Kitten 3",
    image: "images/kitten-3.jpg",  // Ensure the correct path for your image
    link: "About Kitten 3",
    description: "Demo description about kitten 3"
  }
];

// REST API endpoint to send the project data (card list)
app.get('/api/projects', (req, res) => {
  res.json({
    statusCode: 200,
    data: cardList,
    message: "Success"
  });
});

// Start the server
var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App listening on port: " + port);
});
