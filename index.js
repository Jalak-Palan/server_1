const express = require("express");

const app = express();

const users = [
  {
    "studentName": "ABDUL HAQUE",
    "University": "SUxCG 714",
    "UniversityUID": "108444"
  },
  {
    "studentName": "ADITYA KUMAR",
    "University": "SUxCG 702",
    "UniversityUID": "108716",
  },
  {
    "studentName": "AMAN KUMAR",
    "University": "SUxCG 702",
    "UniversityUID": "108500"
  },
  {
    "studentName": "AMRIT RAJ",
    "University": "SUxCG 702",
    "UniversityUID": "108587"
  },
  {
    "studentName": "Jalak Palan",
    "University": "SUxCG 702",
    "UniversityUID": "108714"
  }

]

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/users/test/:from_card", (req, res) => {
  console.log("jalak", req)
  console.log("jalak", req.params);
  res.status(200).json(users);
});

app.get("/users/:UniversityUID", (req, res) => {
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