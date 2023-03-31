import { Stack, Typography } from "@mui/material";

//Component that shows an error message when there is a server health error
const ServerHealthError = (props) => {
  return (
    <Stack
      display="row"
      justifyContent="center"
      alignItems="center"
      sx={{ textAlign: "center", minHeight: "80vh" }}
    >
      <Typography fontSize="x-large">
        There is currently an error with the server. Please try again
      </Typography>
    </Stack>
  );
};

export default ServerHealthError;
