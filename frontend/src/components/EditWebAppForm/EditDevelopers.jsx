import { Grid } from "@mui/material";

//Component that manages editing developers for Web Apps
const EditDevelopers = (props) => {
  //Component Props
  const { errors, developerList, handleDeveloperChange, errorMessage } = props;

  return (
    <>
      <h2>Developers</h2>
      <Grid container>
        <Grid item md={3} s={8} xs={12}>
          <input
            placeholder="Developer Name"
            value={developerList[0] ? developerList[0] : ""}
            onChange={(event) => handleDeveloperChange(event.target.value, 0)}
            style={{ height: "30px", marginBottom: "10px" }}
            variant="outlined"
            type="text"
          />
        </Grid>
        <Grid item md={3} s={8} xs={12}>
          <input
            placeholder="Developer Name"
            onChange={(event) => handleDeveloperChange(event.target.value, 1)}
            value={developerList[1] ? developerList[1] : ""}
            style={{ height: "30px", marginBottom: "10px" }}
            variant="outlined"
            type="text"
          />
        </Grid>
        <Grid item md={3} s={8} xs={12}>
          <input
            placeholder="Developer Name"
            value={developerList[2] ? developerList[2] : ""}
            onChange={(event) => handleDeveloperChange(event.target.value, 2)}
            style={{ height: "30px", marginBottom: "10px" }}
            variant="outlined"
            type="text"
          />
        </Grid>
        <Grid item md={3} s={8} xs={12}>
          <input
            placeholder="Developer Name"
            onChange={(event) => handleDeveloperChange(event.target.value, 3)}
            value={developerList[3] ? developerList[3] : ""}
            style={{ height: "30px", marginBottom: "10px" }}
            variant="outlined"
            type="text"
          />
        </Grid>
        <Grid item md={3} s={8} xs={12}>
          <input
            placeholder="Developer Name"
            onChange={(event) => handleDeveloperChange(event.target.value, 4)}
            value={developerList[4] ? developerList[4] : ""}
            style={{ height: "30px", marginBottom: "10px" }}
            variant="outlined"
            type="text"
          />
        </Grid>
      </Grid>
      {errors && <p className="form-error">{errorMessage}</p>}
    </>
  );
};

export default EditDevelopers;
