import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Send } from "lucide-react";

const PortfolioLandingPage = () => {
  const projects = [
    { id: 1, title: "Project 1", description: "Description of Project 1" },
    { id: 2, title: "Project 2", description: "Description of Project 2" },
    { id: 3, title: "Project 3", description: "Description of Project 3" },
  ];

  const socialLinks = [
    { id: 1, icon: <Github />, url: "https://github.com/yourusername" },
    { id: 2, icon: <Linkedin />, url: "https://linkedin.com/in/yourusername" },
    { id: 3, icon: <Twitter />, url: "https://twitter.com/yourusername" },
  ];

  const skills = ["React", "JavaScript", "HTML", "CSS", "Node.js", "Python"];

  const testimonials = [
    { id: 1, text: "Great to work with!", author: "Jane Doe" },
    {
      id: 2,
      text: "Delivered the project on time and exceeded expectations.",
      author: "John Smith",
    },
    {
      id: 3,
      text: "Highly recommended for any web development project.",
      author: "Alice Johnson",
    },
  ];

  return (
    <div>
      <div>
        <div>
          <div>
            <section id="home">
              <div>
                <h1>Your Name</h1>
                <p>Your Job Title</p>
                <div>
                  <h2>About Me</h2>
                  <p>
                    Your profile description goes here. Talk about your skills,
                    experience, and what you're passionate about.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img src="/api/placeholder/256/256" alt="Your Name" />
                </div>
              </div>
            </section>

            <section id="skills">
              <h2>Skills</h2>
              <div>
                {skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
            </section>

            <section id="projects">
              <h2>Projects</h2>
              <div>
                {projects.map((project) => (
                  <div key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="testimonials">
              <h2>Testimonials</h2>
              <div>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id}>
                    <p>"{testimonial.text}"</p>
                    <p>- {testimonial.author}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact">
              <h2>Contact Me</h2>
              <form>
                <div>
                  <label>Name</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div>
                  <label>Message</label>
                  <textarea id="message" name="message" rows="4"></textarea>
                </div>
                <button type="submit">
                  Send Message
                  <Send />
                </button>
              </form>
              <div>
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLandingPage;
