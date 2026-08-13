import react from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [showPassword, setShowPassword] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState("");

  const [formData, setformData] = useState({
    name: "",
    username: "",
    email: "",
    age: "",
    password: "",
    course: "",
    gender: "",
    about: "",
    terms: false
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setformData({
      name: "",
      username: "",
      email: "",
      age: "",
      password: "",
      course: "",
      gender: "",
      about: "",
      terms: false
    });
  }

  const handleChnage = (e) => {
    const { name, value, type, checked } = e.target;

    setformData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })



    if (name === "password") {

      if (value === "") {
        setPasswordMsg("");
      }
      else if (
        value.match(/[a-z]/) &&
        value.match(/[A-Z]/) &&
        value.match(/[0-9]/) &&
        value.match(/[!@#$%&*]/)
      ) {
        setPasswordMsg("Password is strong");
      }
      else if (
        value.match(/[a-z]/) &&
        value.match(/[A-Z]/) &&
        value.match(/[0-9]/)
      ) {
        setPasswordMsg("Password is medium");
      }
      else {
        setPasswordMsg("Password is weak");
      }
    }
  }




return (
  <div className="form-container">
    <h3>Student Registration Form</h3>

    <form onSubmit={handleSubmit}>


      <label htmlFor="name">Full Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChnage} placeholder="Enter your  fullname" />


      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" value={formData.username} onChange={handleChnage} placeholder="Enter your username" />


      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChnage} placeholder="Enter your email" />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" value={formData.age} onChange={handleChnage} placeholder="Enter your age" />

      <label htmlFor="password">Password:</label>
      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChnage}
          placeholder="Enter your password"
        />

        <button type="button" className="eye-button" onClick={() => setShowPassword(!showPassword)}>
          👁️
        </button>
      </div>

      <p className={
        passwordMsg === "Password is strong" ? "pwd-strong" :
          passwordMsg === "Password is medium" ? "pwd-medium" :
            passwordMsg === "Password is weak" ? "pwd-weak" : ""
      }>{passwordMsg}</p>

      <label htmlFor="course">Course:</label>
      <select
        id="course"
        name="course"
        value={formData.course}
        onChange={handleChnage}
      >
        <option value="">Select Course</option>
        <option value="cpism">CPISM</option>
        <option value="dism">DISM</option>
        <option value="hdes">HDES</option>
        <option value="adse">ADSE</option>
      </select>

      <label>Select Gender:</label>
      <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChnage} />
      <label htmlFor="male">Male</label>
      <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChnage} />
      <label htmlFor="female">Female</label>

      <label>About Yourself:</label>
      <textarea placeholder="Write about yourself" name="about" value={formData.about} onChange={handleChnage} maxLength={100}></textarea>

      <div className="terms-row">
        <input type="checkbox" id="terms" name="terms" checked={formData.terms} onChange={handleChnage} />
        <label htmlFor="terms">Accept Terms and Conditions</label>
      </div>

      <div className="char-counter">
        About: <b>{formData.about.length}</b>
      </div>

      <button type="submit" disabled=
        {formData.name === "" || formData.username === "" || formData.email === "" || formData.age === "" || formData.password === "" || formData.course === "" || formData.gender === "" || formData.about === "" || formData.terms === false
        }>Submit</button>
    </form>



  </div>
)
}
export default App;