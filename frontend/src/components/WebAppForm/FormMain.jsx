import { Grid, Button, TextField, MenuItem } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import "../styles/webappform.css";
import AddDevelopers from "./AddDevelopers";

const FormMain = (props) => {
  const { saveWebAppData } = props;
  //useForm Hook
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "Developers",
    control,
    rules: {
      required:
        "Please add 1 to 5 developers and ensure that a name is entered in the field.",
      minLength: 1,
      maxLength: 5,
    },
  });

  //Function to submit and save new web app data
  const submitNewWebAppData = async (data) => {
    await saveWebAppData(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitNewWebAppData)} autoComplete="off">
        <Grid container>
          <Grid item xs={12} sx={{ padding: "0 0 1% 1%" }}>
            <TextField
              label="Product Name"
              variant="outlined"
              type="text"
              name="productName"
              {...register("productName", { required: true })}
            />
            {errors.productName && (
              <p className="form-error">Product Name is required.</p>
            )}
          </Grid>
          <Grid item xs={12} sx={{ padding: "0 0 1% 1%" }}>
            <TextField
              label="Scrum Master"
              variant="outlined"
              type="text"
              name="scrumMasterName"
              {...register("scrumMasterName", { required: true })}
            />
            {errors.scrumMaster && (
              <p className="form-error">Scrum Master is required.</p>
            )}
          </Grid>
          <Grid item xs={12} sx={{ padding: "0 0 1% 1%" }}>
            <TextField
              label="Product Owner"
              variant="outlined"
              type="text"
              name="productOwnerName"
              {...register("productOwnerName", { required: true })}
            />
            {errors.productOwner && (
              <p className="form-error">Product Owner is required.</p>
            )}
          </Grid>
          <Grid item xs={12} sx={{ padding: "0 0 1% 1%" }}>
            <TextField
              label="Start Date"
              sx={{ width: "195px" }}
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
          <Grid item xs={12} sx={{ padding: "0 0 1% 1%" }}>
            <TextField
              variant="outlined"
              sx={{ width: "195px" }}
              select
              label="Methdology"
              name="methodology"
              {...register("methodology", { required: true })}
            >
              <MenuItem key={"Agile"} value={"Agile"}>
                {"Agile"}
              </MenuItem>
              <MenuItem key={"Waterfall"} value={"Waterfall"}>
                {"Waterfall"}
              </MenuItem>
            </TextField>
            {errors.methodology && (
              <p className="form-error">Methodology is required.</p>
            )}
          </Grid>
        </Grid>
        <AddDevelopers
          append={append}
          remove={remove}
          errors={errors}
          register={register}
          fields={fields}
        />
        <Button size="large" type="submit" variant="outlined">
          Save
        </Button>
      </form>
    </>
  );
};

export default FormMain;
