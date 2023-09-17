import { Cascader } from "antd";
import { useState } from "react";
import data from './data/data.js'

const { SHOW_CHILD } = Cascader;

const App = () => {
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [sectors, setSectors] = useState(data);
  const savedData = localStorage.getItem("savedData")

  const onChange = (value) => {
    // setSectors(value);
    console.log(value);
  };

  console.log(sectors)

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  const submitHandler = () => {
    console.log(
      [
        name,
        isChecked,
        sectors
      ]
    )
  };

  return (
    <div className="container">
      <div className="container2">
        <p className="header">
          Please enter your name and pick the Sectors you are currently involved
          in.
        </p>
        <form style={{ color: "#6B7280" }} onSubmit={submitHandler}>
          <div className="inputContainer">
            <label>Name: </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="inputBox"
              name="name"
              type="text"
            />
          </div>
          <div className="inputContainer">
            <label>Sectors: </label>
            <Cascader
              style={{ width: "100%" }}
              options={sectors}
              onChange={onChange}
              multiple
              maxTagCount="responsive"
              showCheckedStrategy={SHOW_CHILD}
            />
          </div>
          <div className="inputContainer">
            <input
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={checkHandler}
            />
            <label>Agree to terms</label>
          </div>
          <button type="submit" className="saveButton">
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
