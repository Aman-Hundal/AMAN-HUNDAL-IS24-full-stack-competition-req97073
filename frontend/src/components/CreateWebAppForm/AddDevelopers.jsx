import { Grid, Button, Stack } from "@mui/material";

//Component that manages adding developers to Web Apps
const AddDevelopers = (props) => {
  //Component Props
  const { append, remove, errors, register, fields } = props;

  return (
    <>
      <h2>Developers</h2>
      <Grid container>
        {fields.map((field, idx) => {
          return (
            <Grid key={idx} item md={3} s={8} xs={12}>
              <input
                placeholder="Developer Name"
                style={{ height: "30px", marginBottom: "10px" }}
                variant="outlined"
                type="text"
                {...register(`Developers.${idx}.name`, {
                  required: true,
                })}
              />
            </Grid>
          );
        })}
      </Grid>
      {errors.Developers && (
        <p className="form-error">
          To submit the form, please add 1 to 5 developers and ensure that a name is entered in
          there respective fields.
        </p>
      )}
      <Stack direction="row" sx={{ marginTop: "20px" }}>
        <Button
          variant="outlined"
          size="small"
          disabled={fields.length >= 5}
          onClick={() => append()}
          sx={{ marginRight: "5px" }}
        >
          Add
        </Button>
        <Button
          disabled={fields.length <= 0}
          variant="outlined"
          size="small"
          onClick={() => remove()}
        >
          Clear
        </Button>
      </Stack>
    </>
  );
};

export default AddDevelopers;
