import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Live from "./Pages/Live";
import Location from "./Pages/Location";
import About from "./Pages/About";
import styled from "styled-components";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  //align-items: center;
  h1 {
    font-size: calc(1rem + 1.2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Pages>
          <Routes>
            <Route path="/" element={<Live />} />
            <Route path="/location" element={<Location />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Pages>
      </Router>
    </>
  );
}

export default App;
