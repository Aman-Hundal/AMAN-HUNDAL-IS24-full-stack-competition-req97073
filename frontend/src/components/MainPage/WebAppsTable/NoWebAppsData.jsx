import { Stack, Typography } from "@mui/material";

//Component that shows a message when there are no Web Apps available
const NoWebAppsData = (props) => {
  return (
    <Stack
      display="row"
      justifyContent="center"
      alignItems="center"
      sx={{ textAlign: "center", minHeight: "40vh" }}
    >
      <Typography fontSize="x-large">
        No Web Applications found
      </Typography>
    </Stack>
  );
};

export default NoWebAppsData;
