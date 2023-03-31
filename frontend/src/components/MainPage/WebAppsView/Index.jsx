import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Stack,
  Button,
} from "@mui/material";
import { useState } from "react";
import WebAppCounter from "../WebAppCounter/Index";
import WebAppsTable from "../WebAppsTable/Index";
import { useSearchParams } from "react-router-dom";

//Component that handles users search queries and shows the user all the webapps
const WebAppsView = (props) => {
  //Component Props
  const { webAppData, getQueriedWebApp } = props;
  //State to manage Search functionality for user
  const [searchCriteria, setSearchCriteria] = useState("");
  const [searchSelection, setSearchSelection] = useState({
    developers: false,
    scrumMaster: false,
  });
  //Local state to manage submission error handling
  const [submissionError, setSubmissionError] = useState({
    error: false,
    message: "",
  });
  //Table Pagination State Management
  const [webAppTablePage, setWebAppTablePage] = useState(0);
  //React Router hooks
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  //Function to handle selection on query check boxes
  const handleQueryCheckBox = (value) => {
    if (value === "Scrum Master") {
      setSearchSelection((prev) => ({
        ...prev,
        scrumMaster: !prev.scrumMaster,
      }));
    }
    if (value === "Developer") {
      setSearchSelection((prev) => ({
        ...prev,
        developers: !prev.developers,
      }));
    }
  };
  //Function to handle users input for search criteria
  const handleSearchCriteria = (value) => {
    setSearchCriteria(value);
  };
  //Submit user serach query and load web app data related to search
  const submitSearch = async (query) => {
    let cleanQuery = "";
    if (searchSelection.developers) {
      cleanQuery = `Developers=${query}`;
      setSearchParams(cleanQuery);
    }
    if (searchSelection.scrumMaster) {
      cleanQuery = `scrumMaster=${query}`;
      setSearchParams(cleanQuery);
    }
    const response = await getQueriedWebApp(cleanQuery);
    //Conditional statement to check if there was an error submitting the web app data
    if (response.status !== 200) {
      return setSubmissionError((prev) => ({
        ...prev,
        error: true,
        message: response.data.message,
      }));
    }
    //Reset pagination to beginning for data table
    setWebAppTablePage(0);
    //Clear submission error data if no error
    setSubmissionError((prev) => ({
      ...prev,
      error: false,
      message: "",
    }));
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
          <Stack direction="row">
            <TextField
              sx={{ width: "50vw" }}
              label="Enter a name here and choose a criteria below"
              onChange={(event) => handleSearchCriteria(event.target.value)}
            />
            <Button
              onClick={() => submitSearch(searchCriteria)}
              variant="outlined"
              size="small"
              sx={{ marginLeft: "5px" }}
            >
              Search
            </Button>
          </Stack>
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
        {submissionError.error ? (
          <p style={{ margin: 0, color: "red" }}>{submissionError.message}</p>
        ) : (
          ""
        )}
      </Stack>
      <WebAppCounter webAppData={webAppData} webApps={webAppData} />
      <WebAppsTable
        webApps={webAppData}
        webAppTablePage={webAppTablePage}
        setWebAppTablePage={setWebAppTablePage}
      />
    </>
  );
};

export default WebAppsView;
