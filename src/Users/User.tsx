interface UserProps {
  userName: string
}

const User : React.FC<UserProps> = (props) => {
  return (
    <div className="userListItem">
      {props.userName}
    </div>
  )
}

export default User