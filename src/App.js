import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";
import EditUser from "./components/EditUser";
import CrudWithReact from "./components/CrudWithReact";
import PageNotFound from "./components/PageNotFound";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CrudWithReact />} />
        <Route path="/all" element={<AllUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
