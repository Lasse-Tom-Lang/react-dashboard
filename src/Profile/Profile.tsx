import ProfileImage from "../NavBar/testProfileImage.jpeg"

const Profile = () => {

  const profileData = {
    name: "Admin",
    role: "Admin",
    mailAddress: "email@emailprovider.com"
  }

  return (
    <main id="profile">
      <div>
        <img src={ProfileImage} alt="profile" />
      </div>
      <div>
        <h1>
          {profileData.name}
        </h1>
        <p>
          {profileData.role}
        </p>
        <p>
          Email: {profileData.mailAddress}
        </p>
      </div>
    </main>
  )
}

export default Profile