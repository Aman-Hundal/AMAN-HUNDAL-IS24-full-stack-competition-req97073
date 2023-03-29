import "../styles/webappform.css";
import { Grid, Button, TextField, MenuItem, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EditDevelopers from "./EditDevelopers";

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
    Developers: webApp.Developers,
    error: false,
    message: "",
  });
  //React Router hook
  const navigate = useNavigate();

  //Function to handle form input change for developer for data
  const handleDeveloperChange = (value, idx) => {
    const Developers = [...developerFormData.Developers];
    Developers[idx] = value;
    setDeveloperFormData((prev) => ({ ...prev, Developers }));
  };
  //Function to handle form input change for developer for data
  const handleErrorsDeveloperData = () => {
    if (developerFormData.Developers.every((developer) => developer === "")) {
      const message =
        "Please add 1 to 5 developers and ensure that a name is entered in there respective fields.";
      const error = true;
      return setDeveloperFormData((prev) => ({ ...prev, message, error }));
    }
    const message = "";
    const error = false;
    setDeveloperFormData((prev) => ({ ...prev, message, error }));
  };
  //Function to submit and save new web app data
  const submitUpdatedAppData = async (data) => {
    data["Developers"] = developerFormData.Developers.filter(
      (developer) => developer !== ""
    );
    const response = await updateWebApp(webApp.productId, data);
    if (response.status !== 204) {
      return setSubmissionError((prev) => ({
        ...prev,
        error: true,
        message: response.data.message,
      }));
    }
    //Clear error data (if any), and naviate to main page
    setSubmissionError((prev) => ({
      ...prev,
      error: false,
      message: "",
    }));
    navigate("/webapps");
  };

  //useEffect to handle errors
  useEffect(() => {
    handleErrorsDeveloperData();
  }, [developerFormData.Developers]);

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
              <p className="form-error">Product Name is required.</p>
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
              <p className="form-error">Product Owner Name is required.</p>
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
              <p className="form-error">Scrum Master Name is required.</p>
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
              <p className="form-error">Start Date is required.</p>
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
              <p className="form-error">Methodology is required.</p>
            )}
          </Grid>
        </Grid>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <EditDevelopers
            errors={developerFormData.error}
            errorMessage={developerFormData.message}
            developerList={developerFormData.Developers}
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
