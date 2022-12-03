import User from "./User"

const Users = () => {
  return (
    <main>
      <h1>
        Users
      </h1>
      <div id="userList">
        <div>
          <span>
            Name
          </span>
          <span>
            Role
          </span>
          <span>
            Last online
          </span>
        </div>
        <User userName="Test" role="admin" lastOnline={new Date(2022, 11, 12)}/>
        <User userName="Test" role="user" lastOnline={new Date(2022, 4, 27)}/>
        <User userName="Test" role="admin" lastOnline={new Date(2021, 11, 5)}/>
        <User userName="Test" role="user" lastOnline={new Date(2022, 5, 15)}/>
      </div>
    </main>
  )
}

export default Users