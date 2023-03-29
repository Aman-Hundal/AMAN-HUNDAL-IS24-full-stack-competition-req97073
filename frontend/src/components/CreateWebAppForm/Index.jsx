import { Stack } from "@mui/material";
import FormMain from "./FormMain";
import { useState } from "react";

const CreateWebAppForm = (props) => {
  //Component Props
  const { saveWebApp } = props;
  //Local state to manage submission error handling
  const [submissionError, setSubmissionError] = useState({
    error: false,
    message: "",
  });

  return (
    <Stack alignItems="center" justifyContent="center" sx={{ width: "100%" }}>
      {submissionError.error ? (
        <p style={{ margin: 0, color: "red" }}>{submissionError.message}</p>
      ) : (
        ""
      )}
      <h2>Create a New Web Application</h2>
      <FormMain
        saveWebApp={saveWebApp}
        setSubmissionError={setSubmissionError}
      />
    </Stack>
  );
};

export default CreateWebAppForm;
