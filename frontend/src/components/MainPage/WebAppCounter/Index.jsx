import { Stack, Typography } from "@mui/material";

//Component that keeps track of the number of Web Apps currently available
const WebAppCounter = (props) => {
  const { webApps } = props;
  
  return (
    <Stack
      direction="column"
      alignItems="flex-end"
      sx={{ margin: "0 25px 0 0" }}
    >
      <h1 style={{ marginBottom: 0, marginTop: 0 }}>{webApps.length}</h1>
      <Typography fontSize="small" sx={{ textAlign: "center" }}>
        Total Web Applciations
      </Typography>
    </Stack>
  );
};

export default WebAppCounter;
