import React from "react"

export default function Pics(props) {
  return (
    <div>
      <div className="font-bold text-purple-700 text-lg my-10">Pics</div>
      <div>
        <img
          className="w-4/5 mx-auto my-4 rounded-lg"
          src={require("../assets/Images/pic1.jpg")}
          alt="personal"
        />
        <img
          className="w-4/5 mx-auto my-4 rounded-lg"
          src={require("../assets/Images/pic2.jpg")}
          alt="personal"
        />
        <img
          className="w-4/5 mx-auto my-4 rounded-lg"
          src={require("../assets/Images/pic3.jpg")}
          alt="personal"
        />
      </div>
    </div>
  )
}
