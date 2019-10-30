import React from 'react'
import { Link } from 'react-router-dom'


const UserCard = ({ username, id, image }) => (
  <Link to={`/userRecordBox/${id}`}>
    <div className="column-is-one-third album-card" value={id} key={id} >
      <div className="profile-pic-container">
        <div >
          <img className="profile-card-pic" src={image}></img>
        </div>
      </div>

      <div>
        <h5 className="title-size">{id}</h5>
        <h6>{`${username}`}</h6>
      </div>
    </div >
  </Link>
)

export default UserCard