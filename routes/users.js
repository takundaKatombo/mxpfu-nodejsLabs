const express = require('express');
const router = express.Router();


let users = [
  {
    firstName: "John",
    lastName: "wick",
    email: "johnwick@gamil.com",
    DOB: "22-01-1990",
  },
  {
    firstName: "John",
    lastName: "smith",
    email: "johnsmith@gamil.com",
    DOB: "21-07-1983",
  },
  {
    firstName: "Joyal",
    lastName: "white",
    email: "joyalwhite@gamil.com",
    DOB: "21-03-1989",
  },
];

// GET request: Retrieve all users
router.get("/", (req, res) => {
  // Copy the code here
  res.send(JSON.stringify(users))//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email", (req, res) => {
  // Copy the code here
  const email = req.params.email;
  let filteredUsers = users.filter((user) => user.email === email);
  res.send(filteredUsers);//This line is to be replaced with actual return value
});


// POST request: Create a new user
router.post("/", (req, res) => {
  // Copy the code here
  users.push({ "firstName": req.query.firstName, "lastName": req.query.lastName, "email": req.query.email, "DOB": req.query.DOB });
  res.send("The user " + (' ') + (req.query.firstName) + " has been added")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  const email = req.params.email;
  let filteredUsers = users.filter((user) => user.email === email);
  if (filteredUsers.length > 0) {
    let filteredUser = filteredUsers[0];
    let DOB = req.query.DOB;
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    if (DOB) {
      filteredUser.DOB = DOB;
    }
    if (firstName) {
      filteredUser.firstName = firstName;
    }
    if (lastName) {
      filteredUser.lastName = lastName;
    }

    users = users.filter((user) => user.email != email);
    users.push(filteredUser);
    res.send(`User with the email  ${email} updated.`);
  } else {
    res.send("User not found")
  }
  //This line is to be replaced with actual return value
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  const email = req.params.email;
  users = users.filter((user) => user.email != email)
  res.send(`User with email ${email} deleted`)//This line is to be replaced with actual return value
});

module.exports = router;
