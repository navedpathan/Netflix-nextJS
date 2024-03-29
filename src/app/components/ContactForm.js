"use client";

import React, { useState } from "react";
import styles from "@/app/styles/contact.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

function ContactForm() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://next-js-ott.vercel.app/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
      // Set the status based on the response from the API route
      if (res.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            className={mulish.className}
            value={user.username}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Enter your email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={mulish.className}
            value={user.email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Enter your phone no.
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your phone no."
            className={mulish.className}
            value={user.phone}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Enter your message...
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Enter your message"
            className={mulish.className}
            value={user.message}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>
      </div>

      <div>
        {status === "success" && (
          <p className={styles.success_msg}>Thank you for your message!</p>
        )}
        {status === "error" && (
          <p className={styles.error_msg}>
            There was an error submitting your message. Please try again.
          </p>
        )}
        <button type="submit" className={mulish.className}>
          Send a message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
