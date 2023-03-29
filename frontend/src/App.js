import useAppData from "./hooks/useAppData";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import WebAppForm from "./components/CreateWebAppForm/Index";
import EditWebAppForm from "./components/EditWebAppForm/Index";
import MainPage from "./components/MainPage/Index";

function App() {
  //Global App Data/Functions
  const { webAppState, loading, saveWebApp, getWebApp, updateWebApp } =
    useAppData();

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
                  <MainPage webAppData={webAppState} />
                </>
              }
            />
            <Route
              path="/webapps/new"
              element={<WebAppForm saveWebApp={saveWebApp} />}
            />
            <Route
              path="/webapps/:productId/edit"
              element={
                <EditWebAppForm
                  getWebApp={getWebApp}
                  updateWebApp={updateWebApp}
                />
              }
            />
            <Route path="/" element={<Navigate to="/webapps" replace />} />
            {/* <Route path="*" element={<Navigate to="/notfound" replace />} /> */}
          </Routes>
        </BrowserRouter>
      ) : null}
    </>
  );
}

export default App;
