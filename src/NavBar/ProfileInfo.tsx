import ProfileImage from "./testProfileImage.jpeg";

function ProfileInfo() {
  return (
    <div id='profileInfo'>
      <p>Name</p>
      <img src={ProfileImage} alt="You"/>
    </div>
  );
}

export default ProfileInfo;