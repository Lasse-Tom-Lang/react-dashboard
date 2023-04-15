import UsersOnline from "./Widgets/UsersOnline";
import ServerUtilization from "./Widgets/ServerUtilization";
import Infos from "./Widgets/Infos";

function Main() {
  return (
    <main id="main">
      <UsersOnline usersOnline={12305}/>
      <Infos/>
      <ServerUtilization serverUtilization={240}/>
    </main>
  );
}

export default Main;