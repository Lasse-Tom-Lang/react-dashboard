import UsersOnline from "./Widgets/UsersOnline";
import ServerUtilization from "./Widgets/ServerUtilization";

function Main() {
  return (
    <main id="main">
      <UsersOnline usersOnline={12305}/>
      <div className="widget">

      </div>
      <ServerUtilization serverUtilization={240}/>
    </main>
  );
}

export default Main;