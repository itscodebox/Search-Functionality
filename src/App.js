import "./styles.css";
import React, { useState } from "react";

export default function App() {
  // Make a List of something using an Array (a list can of cricket player /countries/
  //  movie name etc). Now make this list it searchable, you have to put a input textbox
  //  at top of list. When you type in textbox it should only show you items matching from
  //   text typed. For example - If you type only "in" it should show things like "India"
  //   / "China" as both have in in it.
  const cities = ["Mumbai", "Pune", "Aurangabad", "Delhi", "Kota", "Patna"];
  const [filteredData, setFilteredData] = useState(cities);

  const handleChange = (e) => {
    setFilteredData(cities.filter((item) => item.includes(e.target.value)));
  };
  return (
    <div className="App">
      <input onChange={handleChange} />
      <h1>Hello CodeSandbox</h1>
      <ul>
        {filteredData.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
