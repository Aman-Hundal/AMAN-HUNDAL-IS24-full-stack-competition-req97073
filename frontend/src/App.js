import AddWebAppButton from "./components/AddWebAppButton/Index";
import WebAppCounter from "./components/WebAppCounter/Index";
import WebAppsTable from "./components/WebAppsTable/Index";
import useAppData from "./hooks/useAppData";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import WebAppForm from "./components/CreateWebAppForm/Index";

function App() {
  //Global App Data/Functions
  const { webAppState, loading, saveWebAppData } = useAppData();

  return (
    <>
      {!loading ? (
        <BrowserRouter>
          <h1 style={{ textAlign: "center" }}>IMB WebApps Tracker</h1>
          <Routes>
            <Route
              path="/webapps"
              element={
                <>
                  <AddWebAppButton />
                  <WebAppCounter webAppData={webAppState} />
                  <WebAppsTable webAppData={webAppState} />
                </>
              }
            />
            <Route
              path="/webapps/new"
              element={<WebAppForm saveWebAppData={saveWebAppData} />}
            />
            <Route path="/" element={<Navigate to="/webapps" replace />} />
            {/* <Route path="/webapps/:productId/edit" element={<EditWebAppForm />} /> */}
            {/* <Route path="*" element={<Navigate to="/notfound" replace />} /> */}
          </Routes>
        </BrowserRouter>
      ) : null}
    </>
  );
}

export default App;
