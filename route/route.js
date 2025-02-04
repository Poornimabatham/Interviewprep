const express = require("express");
const router = express.Router();

// Authentication Middleware
const auth = function (req, res, next) {
  console.log("I am inside the auth middleware");
  req.user = { userId: 1, role: "admin" }; // Mock user object

  if (req.user) {
    next(); // Proceed to the next middleware if user exists
  } else {
    res.status(401).json({ success: false, message: "Unauthorized: Invalid user" });
  }
};

// Student Role Middleware
const IsStd = function (req, res, next) {
  console.log("I am inside the student role middleware");

  if (req.user.role === "student") {
    next(); // Proceed to the next middleware if role is student
  } else {
    res.status(403).send({
      success: false,
      message: "Access denied: This route is only for students",
    });
  }
};

// Admin Role Middleware
const isAdmin = function (req, res, next) {
  console.log("I am inside the admin role middleware");

  if (req.user.role === "admin") {
    next(); // Proceed to the next middleware if role is admin
  } else {
    res.status(403).send({
      success: false,
      message: "Access denied: This route is only for admins",
    });
  }
};

// Route: Student Access
router.get("/stu", auth, IsStd, (req, res) => {
  console.log("Welcome student");
  res.send("Welcome, student!");
});

// Route: Admin Access
router.get("/admin", auth, isAdmin, (req, res) => {
  console.log("Welcome admin");
  res.send("Welcome, admin!");
});

// Export Router
module.exports = router;
