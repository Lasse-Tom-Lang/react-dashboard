import ProfileImage from "./testProfileImage.jpeg";

interface ProfileInfoProps {
  name: string
}

const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
  return (
    <div id='profileInfo'>
      <p>
        {props.name}
      </p>
      <img src={ProfileImage} alt="You" />
    </div>
  );
}

export default ProfileInfo;