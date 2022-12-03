interface UserProps {
  userName: string,
  role: "user" | "admin",
  lastOnline: Date
}

const User: React.FC<UserProps> = (props) => {
  return (
    <div className="userListItem">
      <span>
        {props.userName}
      </span>
      <span>
        {props.role}
      </span>
      <span>
        {props.lastOnline.toLocaleString('en-US', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        })}
      </span>
    </div>
  )
}

export default User