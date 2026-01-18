import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [value, setValue] = useState("");

  useEffect(
    function () {
      if (value) console.log(value);
    },
    [value],
  );

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <form>
        <input type="text" onChange={handleChange} value={value} />
      </form>
    </div>
  );
};

export default App;
