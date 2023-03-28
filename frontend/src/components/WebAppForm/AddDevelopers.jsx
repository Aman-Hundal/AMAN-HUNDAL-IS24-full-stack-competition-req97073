import { Grid, Button, TextField, Stack } from "@mui/material";

const AddDevelopers = (props) => {
  const { append, remove, errors, register, fields } = props;
  return (
    <>
      <h2>Developers</h2>
      <Grid container>
        {fields.map((field, idx) => {
          return (
            <Grid key={idx} item xs={3}>
              <Stack direction="row" sx={{ padding: "0 0 2% 2%" }}>
                <TextField
                  label="Developer"
                  variant="outlined"
                  type="text"
                  {...register(`Developers.${idx}.name`, {
                    required: true,
                  })}
                />
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ marginLeft: "2px" }}
                  onClick={() => remove(idx)}
                >
                  Remove
                </Button>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
      {errors.Developers && (
        <p className="form-error">
          Please add 1 to 5 developers and ensure that a name is entered in the
          field.
        </p>
      )}
      <Button
        sx={{ margin: "5px 0 5px 0" }}
        variant="outlined"
        size="medium"
        disabled={fields.length >= 5}
        onClick={() => append()}
      >
        Add
      </Button>
    </>
  );
};

export default AddDevelopers;
