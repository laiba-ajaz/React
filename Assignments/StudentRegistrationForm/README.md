# Student Registration Form – ReactJS

A simple **Student Registration Form** built using **ReactJS**. This project demonstrates the use of React `useState`, controlled components, form handling, and basic form validation.


## Features

* Full Name input
* Username input
* Email input
* Age input
* Password input
* Show/Hide Password functionality
* Password Strength Indicator

  * Weak
  * Medium
  * Strong
* Course dropdown
* Gender radio buttons
* About Yourself textarea
* Live character counter
* Maximum 100 characters for About Yourself
* Terms & Conditions checkbox
* Submit button remains disabled until all required fields are completed
* Form submission handled using `onSubmit`
* `preventDefault()` used to prevent page refresh
* Submitted data displayed in the browser console

## React Concepts Used

* `useState`
* Controlled Components
* Single state object for all form fields
* Common `handleChange` function
* `onChange` event handling
* `onSubmit` event handling
* `preventDefault()`
* Conditional rendering
* Dynamic button disabling

## Form State

All form fields are managed through a single `formData` state object:

```javascript
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
});
```

## Password Strength

The password strength indicator checks the entered password for:

* Lowercase letters
* Uppercase letters
* Numbers
* Special characters

Based on these conditions, the form displays **Weak**, **Medium**, or **Strong**.

## Character Counter

The **About Yourself** textarea allows a maximum of **100 characters**.

A live counter displays the number of characters entered:

```text
About: 45
```

## Project Structure

```text
student-registration-form/
│
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── README.md
```

## How to Run

1. Clone or download the project.
2. Open the project folder in VS Code.
3. Install dependencies:

```bash
npm install
```

4. Start the React development server:

```bash
npm start
```

5. Open the application in your browser.

## Submission

This project was created as part of a **ReactJS Student Registration Form assignment** and fulfills the required form-handling and React state-management concepts.
