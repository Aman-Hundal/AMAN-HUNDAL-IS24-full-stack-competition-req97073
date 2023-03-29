import "../styles/webappform.css";
import { Grid, Button, TextField, MenuItem, Stack } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import AddDevelopers from "./AddDevelopers";
import { useNavigate } from "react-router-dom";

const FormMain = (props) => {
  //Component Props
  const { saveWebApp, setSubmissionError } = props;
  //useForm hook to manage form data
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "Developers",
    control,
    rules: {
      required:
        "Please add 1 to 5 developers and ensure that a name is entered in there respective fields.",
      minLength: 1,
      maxLength: 5,
    },
  });
  //React Router hook
  const navigate = useNavigate();

  //Function to submit and save new web app data
  const submitNewWebAppData = async (data) => {
    const response = await saveWebApp(data);
    if (response.status !== 201) {
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

  return (
    <>
      <form onSubmit={handleSubmit(submitNewWebAppData)} autoComplete="off">
        <Grid container>
          <Grid item xs={12} sx={{ padding: "0 0 1% 0" }}>
            <TextField
              label="Product Name"
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
              defaultValue=""
              label="Methodology"
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
          <AddDevelopers
            append={append}
            remove={remove}
            errors={errors}
            register={register}
            fields={fields}
          />
          <Stack
            direction="row"
            sx={{ marginTop: "30px", marginBottom: "20px" }}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              size="medium"
              type="submit"
              variant="outlined"
              disabled={Object.keys(errors).length !== 0}
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
