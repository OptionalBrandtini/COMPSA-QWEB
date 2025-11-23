import "./App.css";
import data from "./templateTools/templateConst.json";
import PortfolioTemplate from "./components/PortfolioTemplate";

function App() {
  return <PortfolioTemplate data={data} />;
}

export default App;
