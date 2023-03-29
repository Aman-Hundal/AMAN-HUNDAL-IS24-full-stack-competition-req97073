import { Stack, Typography } from "@mui/material";

//Component that shows a message when there are no Web Apps available
const NoWebAppsData = (props) => {
  return (
    <Stack
      display="row"
      justifyContent="center"
      alignItems="center"
      sx={{ textAlign: "center", minHeight: "60vh" }}
    >
      <Typography fontSize="x-large">
        There are currently no Web Applications available
      </Typography>
    </Stack>
  );
};

export default NoWebAppsData;
