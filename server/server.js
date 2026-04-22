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
        title: "7-Day AI Fast-Track Bootcamp",
        subtitle:
        "No coding experience needed. If you can message on WeChat, you can build your own app.",
        content: [
        "Creative AI thinking",
        "Prompt toolkit",
        "Cloud AI workflow",
        "Visual content creation",
        "Step-by-step support",
        ],
        audience:
        "Beginners who want to use AI to solve daily-life problems and explore easy ways to start earning.",
        price: 499,
        image: "/images/course1.png",
    },
    {
        title: "14-Day Advanced AI Bootcamp",
        subtitle:
        "Break out of competition and build your own AI-powered personal system.",
        content: [
        "Product positioning",
        "Advanced AI capabilities",
        "Identity building",
        "Performance testing",
        "Personal branding",
        ],
        audience:
        "Professionals who want career transition, stronger personal branding, and real AI application skills.",
        price: 1699,
        image: "/images/course2.png",
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