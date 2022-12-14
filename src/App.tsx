import "./style.scss"
import NavBarLeft from './NavBar/NavBarLeft';
import NavBarTop from './NavBar/NavBarTop';
import Main from './Main/Main';
import Users from "./Users/Users";
import Logs from "./Logs/Logs";
import Notes from "./Notes/Notes";
import NoteView from "./Notes/NoteView/NoteView";
import Profile from "./Profile/Profile";
import ErrorPage from "./ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBarTop />
      <NavBarLeft />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users" element={<Users />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:noteID" element={<NoteView />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;