import React from "react";

const Card = (props) => {
  // console.log(props.user)
  // return (
  //   <div>Card {props.user}</div>
  // )
  console.log(props.user);

  return (
    <div className="p-10">
      <div className="mr-7 bg-blue-500 p-5 rounded-lg">
        <img className="h-32 w-32 rounded-full mb-3" src="" alt="" />
        <h1>{props.user} Username</h1>
        <h2>
          {props.city} City, {props.age} age
        </h2>
        <button className="bg-emerald-500 text-white px-4 py-2 rounded">
          Add Friend
        </button>
      </div>
    </div>
  );
};

export default Card;
