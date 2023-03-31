import Search from "./Search/Index";
import TopMenuButtons from "./TopMenuButtons/Index";

//Main Index Page for App
const MainPage = (props) => {
  //Component Props
  const { webAppData, getQueriedWebApp } = props;
  
  return (
    <>
      <TopMenuButtons />
      <Search webAppData={webAppData} getQueriedWebApp={getQueriedWebApp} />
    </>
  );
};

export default MainPage;
