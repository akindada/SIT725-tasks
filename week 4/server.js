var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");

var app = express();

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Enable CORS if needed for frontend requests

// MongoDB Connection
const MONGO_URI = "mongodb+srv://akindadatolu:sutxL46GArZfpzrm@sit725-wks4.fhqunqp.mongodb.net/";  // Change to your DB name
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Define Mongoose Schema & Model
const FormDataSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String
});
const FormData = mongoose.model("FormData", FormDataSchema);

// Dummy card data
const cardList = [
  {
    title: "Kitten",
    image: "images/kitten.jpg",
    link: "About Kitten",
    description: "Demo description about kitten"
  },
  {
    title: "Kitten 2",
    image: "images/kitten-2.jpg",
    link: "About Kitten 2",
    description: "Demo description about kitten 2"
  },
  {
    title: "Kitten 3",
    image: "images/kitten-3.jpg",
    link: "About Kitten 3",
    description: "Demo description about kitten 3"
  }
];

// API Endpoint to Fetch Cards
app.get('/api/projects', (req, res) => {
  res.json({
    statusCode: 200,
    data: cardList,
    message: "Success"
  });
});

// API Endpoint to Save Form Data to MongoDB
app.post('/api/submit-form', async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ statusCode: 400, message: "All fields are required" });
    }

    const newFormData = new FormData({ firstName, lastName, email });
    await newFormData.save();
    
    res.json({ statusCode: 200, message: "Data Saved Successfully" });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: "Error Saving Data", error });
  }
});

// Start Server
var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App listening on port: " + port);
});
