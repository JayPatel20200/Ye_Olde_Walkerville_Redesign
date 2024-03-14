import Nav from "./components/Nav";
import { Home } from "./pages/Home";
import  { Story } from "./pages/Story";
import  { Wedding } from "./pages/Wedding";
import { RoomType }  from "./pages/RoomType";
import  ExploringWindsor  from "./pages/ExploringWindsor";
import { Contact } from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
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
      </Routes>
    </div>
  );
}

export default App;
