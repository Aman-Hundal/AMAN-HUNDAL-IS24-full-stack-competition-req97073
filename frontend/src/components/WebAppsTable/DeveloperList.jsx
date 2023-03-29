const DeveloperList = (props) => {
  //Component Props
  const { developerList } = props;

  return (
    <>
      {developerList.map((developer, idx) =>
        idx !== developerList.length - 1 ? developer + ", " : developer
      )}
    </>
  );
};

export default DeveloperList;
