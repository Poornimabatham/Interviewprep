const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

app.get("/home", (req, res) => {
  const folderPath = path.join(__dirname, "folder", "test1");
  const filePath = path.join(folderPath, "file.js");

  fs.access(folderPath, fs.constants.F_OK, (err) => {
    if (err) {
      // Directory does NOT exist, create it
      fs.mkdir(folderPath, { recursive: true }, (err) => {
        if (err) {
          return console.error("Error creating directory:", err);
        }
        console.log("Directory created successfully!");
        createFile(filePath, res); // Call the file creation function
      });
    } else {
      // Directory exists, check if the file exists
      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          // File does NOT exist, create it
          console.log("Directory exists, but file does not. Creating file...");
          createFile(filePath, res); // Call the file creation function
        } else {
          // File exists
          console.log("Directory and file both exist.");
          res.sendFile(path.join(__dirname, "public", "index.html")); // Send the response
        }
      });
    }
  });
});

// Helper function to create the file and send the response
function createFile(filePath, res) {
  fs.writeFile(filePath, "data secure", (err) => {
    if (err) {
      return console.error("Error creating file:", err);
    }

    console.log("File created successfully!");
    res.sendFile(path.join(__dirname, "public", "index.html")); // Send the response
  });
}
app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/products.html"));
});

app.get("/ContactUs", (req, res) => {
  res.sendFile(path.join(__dirname, "demoFile3.html"));
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
