import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <h1>Welcome to React Fundamentals!</h1>
      <p>This is the App component.</p>
      <Card user={{ name: "John Doe", age: 30 }} employee={true} gender="male" /> {/*properties are being passed to Card component, for string you can directly used but for other types curly brackets*/}
      <Card user={{ name: "Jane Smith", age: 25 }} employee={false} gender="female" />
    </div>
  );
}

export default App;