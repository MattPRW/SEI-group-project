import React from 'react'
import { Link } from 'react-router-dom'


const UserCard = ({ username, id, image, rekordBox, rekordBox1 }) => (
  <Link to={`/userRecordBox/${id}`}>
    <div className="column-is-one-third album-card" value={id} key={id} >
      <div className="profile-pic-container">
        <div className="profile-image" id={id} style={{ backgroundImage: 'url("https://i.pinimg.com/originals/d6/88/10/d688106b46b6b0454046981212f993dd.jpg")', height: '350px', width: '250px' }} >
          <img className="user-img" src={image}></img>
        </div>
      </div>
      <div>
        {/* <h5 className="title-size">{id}</h5> */}
        <h5 className="title-size">{`${username}`}</h5>
        {/* <h6>{rekordBox.length}</h6> */}
        {/* <h6>{rekordBox1 && (rekordBox1.filter(users => users.filter(user => user.id === id).length))}</h6> */}
      </div>
    </div >
  </Link>
)

export default UserCard