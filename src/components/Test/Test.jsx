import React, { useState } from "react";
import axios from "axios";

function Test() {
  const [test, setTest] = useState([]);

  function call() {
    axios({
      method: "GET",
      url: "/api/test",
    })
      .then((response) => {
        setTest(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <button onClick={call}>Button</button>
      <ul>
        {test.map((item) => {
          return (<li>item.testData</li>);
        })}
      </ul>
    </div>
  );
}

export default Test;
