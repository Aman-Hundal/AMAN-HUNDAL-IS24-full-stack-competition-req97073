import { Stack, Typography } from "@mui/material";

const WebAppCounter = (props) => {
  const { webAppData } = props;
  return (
    <Stack
      direction="column"
      alignItems="flex-end"
      sx={{ margin: "0 25px 0 0" }}
    >
      <h1 style={{ marginBottom: 0, marginTop: 0 }}>
        {webAppData.length > 0 ? webAppData.length : 0}
      </h1>
      <Typography fontSize="small" sx={{ textAlign: "center" }}>
        Total Web Applciations
      </Typography>
    </Stack>
  );
};

export default WebAppCounter;
