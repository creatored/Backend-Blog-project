import { Box, Stack } from "@mui/material";
import LeftNav from "./LeftNav";
import MidNav from "./MidNav";
import RightNav from "./RightNav";
import Login from "./Login-signup";
import { useAuth } from "./AuthContext";

const Home = () => {
 const { loggedIn } = useAuth();

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "black",
          minHeight: "100vh",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            width: "75%",
          }}
        >
          <LeftNav />
          <MidNav />
          <RightNav />
        </Stack>
        <Login/>
      </Box>
    </Box>
  );
};

export default Home;
