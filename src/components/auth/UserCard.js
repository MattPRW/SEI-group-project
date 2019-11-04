import React from 'react'
import { Link } from 'react-router-dom'


const UserCard = ({ username, id, image, rekordBox, rekordBox1, calculateCommonAlbums }) => (
  <Link to={`/userRecordBox/${id}`}>
    <div className="column-is-one-third album-card" value={id} key={id} >
      <div className="profile-pic-container">
        <div className="profile-image" id={id} style={{ backgroundImage: 'url("https://i.pinimg.com/originals/d6/88/10/d688106b46b6b0454046981212f993dd.jpg")', height: '350px', width: '250px' }} >
          <img className="user-img" src={image}></img>
        </div>
      </div>
      <div>
        {rekordBox1 && console.log('common', calculateCommonAlbums(rekordBox1, rekordBox))}
        <h5 className="title no-link">{`${username}`}</h5>
        <h6 className="title-size no-link">{`Albums in Rekord Box: ${rekordBox.length}`}</h6>
        <h6 className="title-size no-link">{`Albums in Common: ${rekordBox1 && calculateCommonAlbums(rekordBox1, rekordBox)}`}</h6>
      </div>
    </div >
  </Link>
)

export default UserCard