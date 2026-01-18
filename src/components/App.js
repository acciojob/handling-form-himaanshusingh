import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [value, setValue] = useState("");

  useEffect(function () {
    console.log(value);
  });

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>App</h1>
      <input type="text" onChange={handleChange} value={value} />
    </div>
  );
};

export default App;
