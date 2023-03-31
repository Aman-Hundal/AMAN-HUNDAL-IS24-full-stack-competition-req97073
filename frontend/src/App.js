import useAppData from "./hooks/useAppData";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CreateWebAppForm from "./components/CreateWebAppForm/Index";
import EditWebAppForm from "./components/EditWebAppForm/Index";
import MainPage from "./components/MainPage/Index";
import ServerHealthError from "./components/ServerHealthError/Index";

function App() {
  //Global App Data/Functions
  const {
    webAppState,
    loading,
    saveWebApp,
    getWebApp,
    updateWebApp,
    getQueriedWebApp,
    deleteWebApp,
    serverError,
  } = useAppData();

  return (
    <>
      {!loading ? (
        <>
          {serverError ? (
            <ServerHealthError />
          ) : (
            <BrowserRouter>
              <h1 style={{ textAlign: "center" }}>IMB WebApps Tracker</h1>
              <Routes>
                <Route
                  path="/webapps"
                  element={
                    <MainPage
                      webAppData={webAppState}
                      getQueriedWebApp={getQueriedWebApp}
                      deleteWebApp={deleteWebApp}
                    />
                  }
                />
                <Route
                  path="/webapps/new"
                  element={<CreateWebAppForm saveWebApp={saveWebApp} />}
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
              </Routes>
            </BrowserRouter>
          )}
        </>
      ) : null}
    </>
  );
}

export default App;
