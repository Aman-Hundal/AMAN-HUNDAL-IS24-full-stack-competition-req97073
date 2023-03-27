import { Stack, Typography } from "@mui/material";
const NoWebAppsData = (props) => {
  return (
    <Stack
      display="row"
      justifyContent="center"
      alignItems="center"
      sx={{ textAlign: "center", minHeight: "60vh" }}
    >
      <Typography fontSize="x-large">
        There are currently no Web Applications catalogued
      </Typography>
    </Stack>
  );
};

export default NoWebAppsData;
