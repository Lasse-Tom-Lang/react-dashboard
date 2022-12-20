import ProfileImage from "./testProfileImage.jpeg";
import { Link } from "react-router-dom";

interface ProfileInfoProps {
  name: string
}

const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
  return (
    <Link to={"/profile"} >
      <div id='profileInfo'>
        <p>
          {props.name}
        </p>
        <img src={ProfileImage} alt="You" />
      </div>
    </Link>
  );
}

export default ProfileInfo;