import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Stack,
} from "@mui/material";
import { useState } from "react";
import WebAppCounter from "../WebAppCounter/Index";
import WebAppsTable from "../WebAppsTable/Index";

const Search = (props) => {
  //Component Props
  const { webAppData } = props;
  //State to manage Search functionality for user
  const [searchCriteria, setSearchCriteria] = useState("");
  const [searchSelection, setSearchSelection] = useState({
    developers: false,
    scrumMaster: false,
  });
  //Table Pagination State Management
  const [webAppTablePage, setWebAppTablePage] = useState(0);

  //Function to clean string data
  const cleanString = (str) => {
    return str.toLowerCase().trim().replace(" ", "");
  };
  //Function to find web apps from user search query
  const queryWebApp = () => {
    const cleanSearchCriteria = cleanString(searchCriteria);
    //Search query if scrum master selected
    if (searchSelection.scrumMaster) {
      return webAppData.filter(
        (webApp) => cleanString(webApp.scrumMasterName) === cleanSearchCriteria
      );
    }
    //Search query if developer selected
    if (searchSelection.developers) {
      return webAppData.filter((webApp) => {
        return webApp.Developers.map((developer) =>
          cleanString(developer)
        ).includes(cleanSearchCriteria);
      });
    }
    //If no query selected, return all web apps data
    return webAppData;
  };
  //Function to handle selection on query check boxes
  const handleQueryCheckBox = (value) => {
    if (value === "Scrum Master") {
      setSearchSelection((prev) => ({
        ...prev,
        scrumMaster: !prev.scrumMaster,
      }));
      //Reset pagination to beginning for data table
      setWebAppTablePage(0);
    }
    if (value === "Developer") {
      setSearchSelection((prev) => ({
        ...prev,
        developers: !prev.developers,
      }));
      //Reset pagination to beginning for data table
      setWebAppTablePage(0);
    }
  };

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "2% 1% 1% 1%",
        }}
      >
        <Stack direction="column" justifyContent="center" alignItems="center">
          <TextField
            sx={{ width: "50vw" }}
            label="Enter a name here and choose a criteria below"
            onChange={(event) => setSearchCriteria(event.target.value)}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  value="Scrum Master"
                  disabled={searchSelection.developers}
                  onClick={(event) => handleQueryCheckBox(event.target.value)}
                />
              }
              label="Scrum Master"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  value="Developer"
                  disabled={searchSelection.scrumMaster}
                  onClick={(event) => handleQueryCheckBox(event.target.value)}
                />
              }
              label="Developer"
            />
          </FormGroup>
        </Stack>
      </Stack>
      <WebAppCounter webAppData={webAppData} webApps={queryWebApp()} />
      <WebAppsTable
        webAppData={webAppData}
        webApps={queryWebApp()}
        webAppTablePage={webAppTablePage}
        setWebAppTablePage={setWebAppTablePage}
      />
    </>
  );
};

export default Search;
