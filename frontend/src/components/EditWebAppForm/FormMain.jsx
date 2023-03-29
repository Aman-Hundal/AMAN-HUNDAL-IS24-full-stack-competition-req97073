import "../styles/webappform.css";
import { Grid, Button, TextField, MenuItem, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EditDevelopers from "./EditDevelopers";

//Main Form Component for editing Web App data
const FormMain = (props) => {
  //Component Props
  const { updateWebApp, setSubmissionError, webApp } = props;
  //useForm hook to manage form data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //State to manage developer form data
  const [developerFormData, setDeveloperFormData] = useState({
    developers: webApp.Developers,
    error: false,
    message: "",
  });
  //React Router hook
  const navigate = useNavigate();

  //Function to handle form input change for developer data
  const handleDeveloperChange = (value, idx) => {
    const developers = [...developerFormData.developers];
    developers[idx] = value;
    setDeveloperFormData((prev) => ({ ...prev, developers }));
  };
  //Function to handle errors on form input for developer data
  const handleErrorsDeveloperData = () => {
    //Conditional to check and see if all elements in the developer data form array are blank (""), if so there is an error
    if (developerFormData.developers.every((developer) => developer === "")) {
      const message =
        "To submit the form, please add 1 to 5 developers and ensure that a name is entered in there respective fields.";
      const error = true;
      return setDeveloperFormData((prev) => ({ ...prev, message, error }));
    }
    const message = "";
    const error = false;
    setDeveloperFormData((prev) => ({ ...prev, message, error }));
  };
  //Function to submit and save updated web app data
  const submitUpdatedAppData = async (data) => {
    //Add developers form data to data that will be sent to backend api
    data["Developers"] = developerFormData.developers;
    //Save updated web app data
    const response = await updateWebApp(webApp.productId, data);
    //Conditional statement to check if there was an error submitting the updated web app data
    if (response.status !== 204) {
      return setSubmissionError((prev) => ({
        ...prev,
        error: true,
        message: response.data.message,
      }));
    }
    //Clear error data and navigate to main page
    setSubmissionError((prev) => ({
      ...prev,
      error: false,
      message: "",
    }));
    navigate("/webapps");
  };

  //useEffect call to handle errors on changes to developer form data
  useEffect(() => {
    handleErrorsDeveloperData();
  }, [developerFormData.developers]);

  return (
    <>
      <form onSubmit={handleSubmit(submitUpdatedAppData)} autoComplete="off">
        <Grid container>
          <Grid item xs={12} sx={{ padding: "0 0 1% 0" }}>
            <TextField
              label="Product Name"
              defaultValue={webApp.productName}
              fullWidth
              variant="outlined"
              type="text"
              name="productName"
              {...register("productName", { required: true })}
            />
            {errors.productName && (
              <p className="form-error">To submit the form, Product Name is required.</p>
            )}
          </Grid>
          <Grid item xs={12} sx={{ padding: "0 0 1% 0" }}>
            <TextField
              label="Product Owner Name"
              defaultValue={webApp.productOwnerName}
              fullWidth
              variant="outlined"
              type="text"
              name="productOwnerName"
              {...register("productOwnerName", { required: true })}
            />
            {errors.productOwnerName && (
              <p className="form-error">To submit the form, Product Owner Name is required.</p>
            )}
          </Grid>
          <Grid item xs={12} sx={{ padding: "0 0 1% 0" }}>
            <TextField
              label="Scrum Master Name"
              defaultValue={webApp.scrumMasterName}
              fullWidth
              variant="outlined"
              type="text"
              name="scrumMasterName"
              {...register("scrumMasterName", { required: true })}
            />
            {errors.scrumMasterName && (
              <p className="form-error">To submit the form, Scrum Master Name is required.</p>
            )}
          </Grid>
          <Grid item xs={12} sx={{ padding: "0 0 1% 0" }}>
            <TextField
              label="Start Date"
              defaultValue={webApp.startDate}
              fullWidth
              variant="outlined"
              type="date"
              name="startDate"
              InputLabelProps={{
                shrink: true,
              }}
              {...register("startDate", { required: true })}
            />
            {errors.startDate && (
              <p className="form-error">To submit the form, Start Date is required.</p>
            )}
          </Grid>
          <Grid item xs={12} sx={{ padding: "0 0 1% 0" }}>
            <TextField
              variant="outlined"
              fullWidth
              select
              defaultValue={webApp.methodology}
              label="Methodology"
              InputLabelProps={{
                shrink: true,
              }}
              name="methodology"
              {...register("methodology", { required: true })}
            >
              <MenuItem key={1} value={"Agile"}>
                {"Agile"}
              </MenuItem>
              <MenuItem key={2} value={"Waterfall"}>
                {"Waterfall"}
              </MenuItem>
            </TextField>
            {errors.methodology && (
              <p className="form-error">To submit the form, Methodology is required.</p>
            )}
          </Grid>
        </Grid>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <EditDevelopers
            errors={developerFormData.error}
            errorMessage={developerFormData.message}
            developerList={developerFormData.developers}
            handleDeveloperChange={handleDeveloperChange}
            handleErrorsDeveloperData={handleErrorsDeveloperData}
          />
          <Stack
            direction="row"
            sx={{ marginTop: "30px" }}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              size="medium"
              type="submit"
              disabled={
                Object.keys(errors).length !== 0 || developerFormData.error
              }
              variant="outlined"
              sx={{ minWidth: 150, marginRight: "5px" }}
            >
              Save
            </Button>
            <Button
              onClick={() => navigate("/webapps")}
              size="medium"
              variant="outlined"
              sx={{ minWidth: 150 }}
            >
              Back
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default FormMain;
