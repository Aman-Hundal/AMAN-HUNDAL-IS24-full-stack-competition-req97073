import TopMenuButtons from "./TopMenuButtons/Index";
import WebAppsView from "./WebAppsView/Index";

//Main Index Page for App
const MainPage = (props) => {
  //Component Props
  const { webAppData, getQueriedWebApp } = props;

  return (
    <>
      <TopMenuButtons />
      <WebAppsView
        webAppData={webAppData}
        getQueriedWebApp={getQueriedWebApp}
      />
    </>
  );
};

export default MainPage;
