import { Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Login from "./Login";
function App() {
  return (
    //block element modifier
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar />
              <Feed />
              <Widgets />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Sidebar />
              <Feed />
              <Widgets />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
