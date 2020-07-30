import React from "react"
import { useHistory } from "react-router-dom"
import Tap from "react-interactions"

export default function Nav(props) {
  const history = useHistory()

  return (
    <nav className="bg-purple-700 text-white flex flex-row justify-between p-6 fixed bottom-0 iphone-size my-box-shadow">
      <button className="focus:outline-none" onClick={() => history.goBack()}>
        <Tap scale />
        <img src={require("../assets/Icons/Vector-2.png")} alt="back button" />
      </button>
      <button className="focus:outline-none" onClick={() => history.push("/")}>
        <Tap scale />
        <img src={require("../assets/Icons/Vector.png")} alt="home button" />
      </button>
      <button className="focus:outline-none" onClick={() => null}>
        <Tap scale />
        <img src={require("../assets/Icons/Vector-1.png")} alt="menu button" />
      </button>
    </nav>
  )
}
