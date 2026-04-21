require("dotenv").config();
const Course = require("./models/Course");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Enrollment = require("./models/Enrollment");
const Contact = require("./models/Contact");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

// test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses" });
  }
});

app.get("/api/courses/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Error fetching course" });
  }
});

app.get("/api/seed", async (req, res) => {
  try {
    await Course.deleteMany();

    const sampleCourses = [
      {
        title: "AI Bootcamp for Beginners",
        instructor: "Emily Chen",
        category: "Beginner",
      },
      {
        title: "Prompt Engineering Essentials",
        instructor: "David Lee",
        category: "Intermediate",
      },
      {
        title: "AI Product Design Basics",
        instructor: "Sophia Wang",
        category: "Design",
      },
      {
        title: "Applied AI for Career Growth",
        instructor: "Michael Zhang",
        category: "Career",
      },
    ];

    await Course.insertMany(sampleCourses);

    res.send("Database seeded!");
  } catch (error) {
    res.status(500).send("Error seeding database");
  }
});

app.get("/api/enrollments", async (req, res) => {
  try {
    const enrollments = await Enrollment.find();
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enrollments" });
  }
});

app.post("/api/enrollments", async (req, res) => {
  try {
    const newEnrollment = new Enrollment(req.body);
    await newEnrollment.save();
    res.json({ message: "Enrollment saved" });
  } catch (error) {
    res.status(500).json({ message: "Error saving enrollment" });
  }
});

app.post("/api/contacts", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.json({ message: "Contact message saved" });
  } catch (error) {
    res.status(500).json({ message: "Error saving contact message" });
  }
});

// start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});