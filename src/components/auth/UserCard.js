import React from 'react'
import { Link } from 'react-router-dom'


const UserCard = ({ username, id, image, rekordBox1 }) => (
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
        {/* <h6>{rekordBox1 && (rekordBox1.users.filter(user => user.id === id).length)}</h6> */}
      </div>
    </div >
  </Link>
)

export default UserCard