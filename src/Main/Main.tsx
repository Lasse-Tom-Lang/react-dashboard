import UsersOnline from "./Widgets/UsersOnline";
import ServerUtilization from "./Widgets/ServerUtilization";

function Main() {
  return (
    <main>
      <UsersOnline usersOnline={12305}/>
      <div className="widget">

      </div>
      <ServerUtilization/>
    </main>
  );
}

export default Main;