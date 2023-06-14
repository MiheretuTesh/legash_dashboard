import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/svg/legash_logo.png";
import "../style/SignUp.css";

function SignUp() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform sign-up logic with name, email and password
    console.log("FirstName:", firstname);
    console.log("LastName:", lastname);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Phone Number:", phoneNumber);
    console.log("Gender:", gender);
    console.log("Role:", role);
  };

  return (
    <div className="signup">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {/* <label htmlFor="name">Name:</label> */}
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Enter your Firstname"
          value={firstname}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Enter your Lasrname"
          value={lastname}
          onChange={(event) => setLastName(event.target.value)}
        />
        {/* <label htmlFor="email">Email:</label> */}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {/* <label htmlFor="password">Password:</label> */}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {/* <label htmlFor="phoneNumber">Phone Number:</label> */}
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />

        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/signin">Sign in here</Link>.
        </p>
      </form>
    </div>
  );
}
export default SignUp;
