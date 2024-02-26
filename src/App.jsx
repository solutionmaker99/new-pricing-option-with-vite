import "./App.css";
import Chart from "./components/Chart/Chart";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import Phones from "./components/Phones/Phones";

function App() {
  return (
    <>
      <DaisyNav></DaisyNav>

      <Navbar></Navbar>
      <Chart></Chart>
      <Phones></Phones>
    </>
  );
}

export default App;
