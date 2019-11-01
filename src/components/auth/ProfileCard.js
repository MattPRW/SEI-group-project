import React from 'react'
import { Link } from 'react-router-dom'


const ProfileCard = ({ image, username, rekordBox }) => (
  <div className="user-card">
    
    <div className="profile-image" style={{ backgroundImage: 'url("https://i.pinimg.com/originals/d6/88/10/d688106b46b6b0454046981212f993dd.jpg")', height: '210px', width: '176px' }} >
      <img className="user-img" src={image}></img>
    </div>
    {/* <div>
      <img className="profile-pic" src={image} />
    </div> */}
    <div className="user-info">
      <h3>
        Hi {username}!
      </h3>
      <div>
        {rekordBox.length > 1 && <p>{`You have ${rekordBox.length} albums in your record box. Click `}<Link to="/search">here</Link> to search for more</p>}
        {rekordBox.length === 1 && <p>{`You only have ${rekordBox.length} album in your record box. Click `}<Link to="/search">here</Link> to search for more</p>}
        {rekordBox.length < 1 && <p>{'You don\'t have anything in your record box yet. Click '}<Link to="/search">here</Link> to get started</p>}
      </div>
      <button className="edit-profile">
        <Link to="/Profile">Edit Profile Details</Link>
      </button>
    </div>
  </div>
)

export default ProfileCard