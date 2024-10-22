import axios from "axios";
import React from "react";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = axios.get("https://picsum.photos/v2/list");
    setData(response.data);

    console.log(data);
  };
  return (
    <div className="p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={getData}
      >
        Get Data
      </button>
      <div className="p-5 mt-5 bg-gray-400">
        {data.map((elem, idx) => {
          return (
            <div key={idx} className="p-5 bg-white rounded-lg m-5">
              <img className='h-40' src={elem.download_url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Card from "./components/Card";

// const App = () => {
//   // const [username, setuserName] = useState("");
//   // const [num, setNum] = useState(0);
//   // // const [readable, writable] = readableWritable(10)
//   // const submitHandler = (e) => {
//   //   e.preventDefault();
//   //   console.log("Form Submitted");
//   //   console.log(username);
//   //   setuserName("");
//   // };

//   // const name = "Abbas Raza";

//   const user = "Abbas Raza";

//   const userData = [
//     {
//       user: 'JohnDoe',
//       city: 'New York',
//       age: 28
//     },
//     {
//       user: 'JaneSmith',
//       city: 'Los Angeles',
//       age: 34
//     },
//     {
//       user: 'MikeJohnson',
//       city: 'Chicago',
//       age: 45
//     },
//     {
//       user: 'EmilyDavis',
//       city: 'Houston',
//       age: 23
//     },
//     {
//       user: 'ChrisBrown',
//       city: 'Phoenix',
//       age: 30
//     }
//   ];

//   return (
// fragments
// <>
{
  /* <Header /> */
}
{
  /* <Navbar /> */
}
{
  /* <Card user={user} />
      <Card user='Abbas' /> */
}
{
  /* <div className="p-10">
        {userData.map((elem,idx) => {
          return <Card key={idx} user={elem.user} city={elem.city} age={elem.age} />;
        })} */
}

{
  /* <Card user='Abbas' age='69' city='karachi'/> */
}
{
  /* </div> */
}

{
  /* <div>
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

    <Footer/> */
}
// </>
//   );
// };

// export default App;
