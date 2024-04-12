import Nav from "./components/Nav";
import { Home } from "./pages/Home";
import  { Story } from "./pages/Story";
import  { Wedding } from "./pages/Wedding";
import { RoomType }  from "./pages/RoomType";
import  ExploringWindsor  from "./pages/ExploringWindsor";
import { Contact } from "./pages/Contact";
import RoomDetailsOne from "./pages/RoomDetailsOne";
import { Route, Routes } from "react-router-dom";
import RoomDetailsTwo from "./pages/RoomDetailsTwo";
import RoomDetailsThree from "./pages/RoomDetailsThree";
import RoomDetailsFour from "./pages/RoomDetailsFour";
import RoomDetailsFive from "./pages/RoomDetailsFive";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<RoomType />} />
        <Route path="/wedding" element={< Wedding />} />
        <Route path="/story" element={<Story />} />
        <Route path="/explore" element={<ExploringWindsor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/roomone" element={<RoomDetailsOne />} />
        <Route path="/roomtwo" element={<RoomDetailsTwo />} />
        <Route path="/roomthree" element={<RoomDetailsThree />} />
        <Route path="/roomfour" element={<RoomDetailsFour />} />
        <Route path="/roomfive" element={<RoomDetailsFive />} />
      </Routes>
    </div>
  );
}

export default App;
