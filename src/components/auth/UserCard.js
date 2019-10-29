import React from 'react'
import { Link } from 'react-router-dom'


const UserCard = ({ image, username, rekordBox }) => (
  <div className="user-card">
    <div>
      <img className="profile-pic" src={image} />
    </div>
    <div className="user-info">
      <h3>
        Hi {username}!
      </h3>
      <p>{`You have ${rekordBox.length} albums in your record box. Click `}<Link to="/search">here</Link> to search for more</p>
      <button className="edit-profile">
        <Link to="/Profile">Edit Profile Details</Link>
      </button>
    </div>
  </div>
)

export default UserCard