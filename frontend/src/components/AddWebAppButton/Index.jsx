import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddWebAppButton = (props) => {
  //React Router hook
  const navigate = useNavigate();

  return (
    <Stack direction="row" justifyContent="center">
      <Button
        sx={{ maxWidth: 200 }}
        variant="outlined"
        size="small"
        onClick={() => navigate("/webapps/new")}
      >
        Add New Web Application
      </Button>
    </Stack>
  );
};

export default AddWebAppButton;
