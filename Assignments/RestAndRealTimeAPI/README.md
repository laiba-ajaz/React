# 🚀 REST API & Real-Time API React Project

A React-based project created to practice working with different REST APIs.
The project integrates **8 APIs**, including **5 dummy APIs** for practice and
**3 real-time APIs** that provide live data.

## ✨ Features

- Fetch data from multiple REST APIs
- Display API data dynamically using React
- Uses `useState` for state management
- Uses `useEffect` for API calls
- Handles loading states
- Handles API errors
- Displays data using reusable React components
- Responsive UI using Bootstrap 5

## 🔌 APIs Used

### 📦 Dummy APIs

| API | Purpose |
|---|---|
| Product API | Fetch and display product information |
| User API | Fetch and display user information |
| Todo API | Fetch and display todo/task information |
| Quotes API | Fetch and display random quotes |
| Devices API | Fetch and display device information |

### 🌐 Real APIs

| API | Purpose |
|---|---|
| Weather API | Fetch real-time weather information |
| Cryptocurrency API | Fetch cryptocurrency market data |
| ISS API | Fetch International Space Station information |

## 🛠️ Technologies Used

- React JS
- JavaScript
- JSX
- Bootstrap 5
- CSS
- REST APIs
- Fetch API
- React Hooks
  - `useState`
  - `useEffect`
- Vite

## 📁 Project Structure

```text
src/
├── Components/
│   ├── ProductAPI.jsx
│   ├── UserAPI.jsx
│   ├── TodoAPI.jsx
│   ├── QuotesAPI.jsx
│   ├── DevicesAPI.jsx
│   ├── WeatherAPI.jsx
│   ├── CryptoCurrency.jsx
│   └── ISS.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx