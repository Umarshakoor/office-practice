// server.js
const express = import("express");
const bodyParser = import("body-parser");
const nodemailer = import("nodemailer");
const mongoose = import("mongoose");

// Initialize app
const app = express();
app.use(bodyParser.json());

// Connect to database (e.g., MongoDB)
mongoose.connect("mongodb://localhost:27017/formsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create schema and model for form data
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  userId: String,
});

const FormModel = mongoose.model("Form", formSchema);

// Setup Nodemailer for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "umarshakoor92@gmail.com",
    pass: "3US92ABExtra",
  },
});

// Endpoint for form submission
app.post("/submit-form", async (req, res) => {
  const { name, email, message } = req.body;

  // Create user ID (for demo purposes, you can improve this logic)
  const userId = new mongoose.Types.ObjectId();

  // Save form data in the database
  const formData = new FormModel({
    name,
    email,
    message,
    userId,
  });

  try {
    await formData.save();

    // Send confirmation email to yourself
    const mailOptions = {
      from: "umarshakoor92@gmail.com",
      to: "umarshakoor2000@gmail.com",
      subject: "New Form Submission",
      text: `You have a new form submission: \n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\nUserID: ${userId}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).send("Form submitted successfully");
  } catch (error) {
    res.status(500).send("Error saving form data or sending email");
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
