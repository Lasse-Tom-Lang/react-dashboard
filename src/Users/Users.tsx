import User from "./User"

const Users = () => {
  return (
    <main>
      <h1>
        Users
      </h1>
      <div id="userList">
        <User userName="Test"/>
        <User userName="Test"/>
        <User userName="Test"/>
        <User userName="Test"/>
      </div>
    </main>
  )
}

export default Users