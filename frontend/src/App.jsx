import "./components/styles/App.css";
import WebAppCounter from "./components/WebAppCounter/Index";
import WebAppsTable from "./components/WebAppsTable/Index";
import useAppData from "./hooks/useAppData";

function App() {
  const { webAppState, loading } = useAppData();
  console.log(webAppState);
  return (
    <>
      {!loading ? (
        <div className="App">
          <h1 style={{ textAlign: "center" }}>IMB WebApps Tracker</h1>
          <WebAppCounter webAppData={webAppState} />
          <WebAppsTable webAppData={webAppState} />
        </div>
      ) : null}
    </>
  );
}

export default App;
