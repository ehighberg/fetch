import React from "react"
import { Link } from "react-router-dom"
import Tap from "react-interactions"

export default function Contact(props) {
  let user = props.user

  return user ? (
    <div>
      <div className="font-bold text-purple-700 text-lg">Contact</div>

      <div className="my-4">Contact message...</div>
      <div className="font-bold text-purple-700 text-lg mb-6">
        Prefers {user.preferred_contact_method}
      </div>
      <Link to={`/rooms/${user.id}`}>
        <img
          className="mx-auto mb-4"
          src={require("../assets/Icons/Chat.png")}
          alt="contact chat"
        />
        <Tap scale waves light />
      </Link>

      <div className="font-bold text-purple-700 text-lg mb-6">
        Average response time: {user.average_response_time_minutes} minutes
      </div>

      <div className="flex flex-row justify-evenly w-11/12 mx-auto mb-6">
        <div>
          <img
            src={require("../assets/Icons/Phone.png")}
            alt={`Phone: ${user.phone}`}
          />
          <Tap scale waves light />
        </div>
        <Link to={`/rooms/${user.id}`}>
          <img src={require("../assets/Icons/Chat.png")} alt={`Chat: (room)`} />
          <Tap scale waves light />
        </Link>
        <div>
          <img
            src={require("../assets/Icons/Video.png")}
            alt={`Slack: ${user.slack}`}
          />
          <Tap scale waves light />
        </div>
        <div>
          <img
            src={require("../assets/Icons/Email.png")}
            alt={`Email: ${user.email}`}
          />
          <Tap scale waves light />
        </div>
      </div>

      <div id="border" className="w-1/2 mx-auto h-px bg-gray-500"></div>

      <div className="mx-12 my-3 p-4">
        <div className="font-bold text-purple-700 text-lg mb-4">
          Request a meeting
        </div>
        <div>
          <img
            className="mx-auto"
            src={require("../assets/Icons/Calendar.png")}
            alt="schedule meeting"
          />
          <Tap scale waves light />
        </div>
      </div>

      <div id="border" className="w-1/2 m-auto h-px bg-gray-500"></div>

      <div className="mx-12 my-3 p-4">
        <div className="font-bold text-purple-700 text-lg mb-4">
          Looking for something simple?
        </div>
        <div className="grid grid-cols-2">
          {user &&
            user.tags.map((tag, index) => (
              <div
                key={index}
                className="w-32 rounded-full text-white p-2 bg-yellow-400 mb-4"
              >
                {tag.name}
                <Tap scale waves light />
              </div>
            ))}
        </div>
      </div>
    </div>
  ) : (
    ""
  )
}
