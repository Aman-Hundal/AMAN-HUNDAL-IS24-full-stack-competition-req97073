import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

//Component (Buttons) that allows the user to add a Web App or return home
const TopMenuButtons = (props) => {
  //React Router hook
  const navigate = useNavigate();

  //Handle Home Button Click
  const handleClick = () => {
    navigate("/webapps");
    window.location.reload();
  };

  return (
    <Stack direction="row" justifyContent="center">
      <Button
        sx={{ maxWidth: 150 }}
        variant="outlined"
        size="small"
        onClick={() => navigate("/webapps/new")}
      >
        Add New Web Application
      </Button>
      <Button
        sx={{ minWidth: 150, marginLeft: "5px" }}
        variant="outlined"
        size="small"
        onClick={() => handleClick()}
      >
        Home
      </Button>
    </Stack>
  );
};

export default TopMenuButtons;
