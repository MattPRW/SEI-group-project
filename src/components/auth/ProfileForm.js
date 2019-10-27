import React from 'react'
const ProfileForm = ({ profile, errors, handleChange, handleSubmit, formTitle }) => (

  <section className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>{formTitle}</h1>
        {profile.username &&
          <div className="field">
            <label className="label">Username*</label>
            <div className="control">
              <input
                className="input"
                name="username"
                placeholder="Username"
                value={profile.username}
                onChange={handleChange}
              />
            </div>
          </div>}
        {profile.email &&
          <div className="field">
            <label className="label">Email*</label>
            <div className="control">
              <input
                className="input"
                name="email"
                placeholder="Email"
                value={profile.email}
                onChange={handleChange}
              />
            </div>
          </div>}
        {profile.password &&
        <div className="field">
          <label className="label">Password*</label>
          <div className="control">
            <input
              className="input"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
        </div>}
        {profile.passwordConfirmation &&
        <div className="field">
          <label className="label">Password Confirmation*</label>
          <div className="control">
            <input
              className="input"
              name="passwordConfirmation"
              placeholder="Password Confirmation"
              onChange={handleChange}
            />
          </div>
        </div>}
        {profile.photo &&
        <div className="field">
          <label className="label">Upload Photo</label>
          <div className="control">
            <input
              className="input"
              name="photo"
              placeholder="Photo"
              value={profile.photo}
              onChange={handleChange}
            />
          </div>
        </div>}
        {profile.address &&
        <div className="field">
          <label className="label">Address</label>
          <div className="control">
            <input
              className="input"
              name="address"
              placeholder="Address"
              value={profile.address}
              onChange={handleChange}
            />
          </div>
        </div>}
        <button type="submit">{formTitle}</button>
      </form>
    </div>
  </section>
)


export default ProfileForm