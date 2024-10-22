import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

const App = () => {
  // const [username, setuserName] = useState("");
  // const [num, setNum] = useState(0);
  // // const [readable, writable] = readableWritable(10)
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted");
  //   console.log(username);
  //   setuserName("");
  // };

  // const name = "Abbas Raza";

  const user = 'Abbas Raza'

  return (
    // fragments
    <>
      {/* <Header /> */}
      <Navbar />
      <Card user={user} />
      <Card user='Abbas' />




    {/* <div>
      <h2 className="text-5xl bg-red-700 text-black">Hello {name}</h2>
      <h3>Number is {num}</h3>
      <button
        onClick={() => {
          setNum(num + 10);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setNum(num - 10);
        }}
      >
        Decrement
      </button>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={username}
          onChange={(e) => {
            setuserName(e.target.value); // Two way binding
          }}
          className="rounded px-4 py-3"
          type="text"
          placeholder="Enter your name"
        />
        <button className="m-5 text-white px-4 py-3 text-xl font-semibold bg-emerald-600 rounded">
          Submit
        </button>
      </form>
    </div>

    <Footer/> */}
    </>
  );
};

export default App;
