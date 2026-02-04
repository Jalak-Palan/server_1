const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" },
  { id: 3, name: "Jalak", role: "student" },
  { id: 4, name: "Rahul", role: "Teacher" },
  { id: 5, name: "Paras", role: "mentor" },
  { id: 6, name: "Raj", role: "Teacher" },
  { id: 7, name: "Jenil", role: "Student" },
  { id: 8, name: "Rudra", role: "Mentor" },
];

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/users/test/:from_card", (req, res) => {
    console.log("jalak",req)
    console.log("jalak",req.params);
  res.status(200).json(users);
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});