import AddWebAppButton from "./AddWebAppButton/Index";
import Search from "./Search/Index";

const MainPage = (props) => {
  const { webAppData } = props;
  return (
    <>
      <AddWebAppButton />
      <Search webAppData={webAppData} />
    </>
  );
};

export default MainPage;
