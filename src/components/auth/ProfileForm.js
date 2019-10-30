import React from 'react'
const ProfileForm = ({ profile, errors, handleChange, handleSubmit, formData }) => (

  <section className="section">
    <div className="container ">
      <form className="u-full-width" onSubmit={handleSubmit}>
        <h2>{formData.title}</h2>
        {!formData.noUserNameField &&
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
        {!formData.noEmailField &&
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
        {!formData.noPasswordField &&
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
        {!formData.noPasswordConfirmationField &&
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
        {!formData.noImageField &&
          <div className="field">
            <label className="label">Upload Photo</label>
            <div className="control">
              <input
                className="input"
                name="image"
                placeholder="Image"
                value={profile.image}
                onChange={handleChange}
              />
            </div>
          </div>}
        {!formData.noAddressField &&
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
        <button type="submit">{formData.title}</button>
      </form>
    </div>
  </section>
)


export default ProfileForm