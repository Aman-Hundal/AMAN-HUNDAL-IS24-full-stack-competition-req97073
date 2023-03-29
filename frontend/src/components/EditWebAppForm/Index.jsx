import { Stack } from "@mui/material";
import FormMain from "./FormMain";
import { useState } from "react";
import { useParams } from "react-router-dom";

const EditWebAppForm = (props) => {
  //Component Props
  const { getWebApp, updateWebApp } = props;
  //Local state to manage submission error handling
  const [submissionError, setSubmissionError] = useState({
    error: false,
    message: "",
  });
  //React Router hook
  const { productId } = useParams();
  //Function call to gather specific web app based on product id parameter
  const webApp = getWebApp(productId);

  return (
    <Stack alignItems="center" justifyContent="center" sx={{ width: "100%" }}>
      {submissionError.error ? (
        <p style={{ margin: 0, color: "red" }}>{submissionError.message}</p>
      ) : (
        ""
      )}
      <h2>Edit Web Application</h2>
      <FormMain
        updateWebApp={updateWebApp}
        setSubmissionError={setSubmissionError}
        webApp={webApp}
      />
    </Stack>
  );
};

export default EditWebAppForm;
