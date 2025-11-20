import "./App.css";
import data from "./templateTools/templateConst.json";

function App() {
  return (
    <>
      <div className={"parentContainer"}>
        <div className={"nameContainer"}>
          <h1>{data.firstName}</h1>
          <h1>{data.lastName}</h1>
        </div>
        <div className={"imgContainer"}>
          <a href={data.linkedInURL}>
            <img src="/linkedin.svg" alt="LinkedIn Image" />
          </a>
          <a href={data.githubURL}>
            <img src="/github.svg" alt="GitHub Image" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
