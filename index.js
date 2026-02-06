const express = require("express");

const app = express();
const students = [
  {
    studentName: "ABDUL HAQUE",
    University: "SUxCG 714",
    UniversityUID: "108444",
  },
  {
    studentName: "ADITYA KUMAR",
    University: "SUxCG 702",
    UniversityUID: "108716",
  },
  {
    studentName: "AMAN KUMAR",
    University: "SUxCG 702",
    UniversityUID: "108500",
  },
  {
    studentName: "AMRIT RAJ",
    University: "SUxCG 702",
    UniversityUID: "108587",
  },
  {
    studentName: "Palan Jalak",
    University: "SUxCG 702",
    UniversityUID: "108714",
  }
];

app.get("/", (req, res) => {
  res.send("CG Students API");
});

app.get("/cg/students", (req, res) => {
  res.status(200).json(students);
});

app.get("/cg/students/:gr_number", (req, res) => {
  const grNumber = req.params.gr_number;

  const student = students.find(
    (s) => s.UniversityUID === grNumber
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  res.status(200).json(student);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});