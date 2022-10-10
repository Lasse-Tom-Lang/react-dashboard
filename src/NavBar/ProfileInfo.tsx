import ProfileImage from "./testProfileImage.jpeg";

function ProfileInfo() {
  return (
    <div id='profileInfo'>
      <img src={ProfileImage} alt="You"/>
      <p>Name</p>
    </div>
  );
}

export default ProfileInfo;