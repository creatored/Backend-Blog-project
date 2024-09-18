import SearchIcon from "@mui/icons-material/Search";
import { Box, Stack } from "@mui/material";
import profile_logo from "../assets/profile-img.jpg";
const RightNav = () => {
  return (
    <Box sx={{ width: "25%",padding:'10px' }}>
      <Box sx={{margin:'10px 0',padding: "13px 5px", position: "relative", display: "flex",
            alignItems: "center"}}>
        <SearchIcon
          sx={{
            position: "absolute",
            zIndex: "10",
            color: "#b8b8b8",
            margin:'0 5px'
          }}
        />
        <input
          type="search"
          placeholder="Search Tumblr"
          style={{
            position: "absolute",
            "&:focus": { backgroundColor: "#1d1d1d" },
            zIndex: "9",
            padding: "9px 35px",
            border: "none",
            color: "#b8b8b8",
            width: "100%",
            backgroundColor: "#404040",
            fontSize: "15px",
            fontWeight: "500",
            borderRadius: "2px",
          }}
        />
      </Box>
      <Box sx={{ marginTop: "25px", bgcolor: "#121212", height: "300px", fontFamily:'sans-serif'}}>
        <Box sx={{ padding: "20px",  fontSize: '17px', fontWeight:'550'}}>
          Trending Blogs
        </Box>
        <Box
          sx={{
            borderTop: "1px solid #b8b8b8",
            borderBottom: "1px solid #b8b8b8",
            cursor: "pointer",
            padding:'5px 0',
          }}
        >
          <Box sx={{ display: "flex",   gap: "10px", padding: "10px", "&:hover": { backgroundColor: "#2c2c2c"} }}>
            <img
              src={profile_logo}
              alt="profile-img"
              style={{ width: "15%", borderRadius: "3px" }}
            />
            <Stack gap={"5px"} width={"50%"}>
              <p>softangelstims</p>
              <p>love</p>
            </Stack>
            <Stack alignItems={"center"} direction={"row"} gap={"15px"}>
              <p
                style={{
                  color: "#00b6f7",
                  fontSize: "14px",
                  fontWeight: "500",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Follow
              </p>
              <i>x</i>
            </Stack>
          </Box>
          <Box sx={{ display: "flex", gap: "10px",  fontSize:'14px', padding: "10px" ,"&:hover": { backgroundColor: "#2c2c2c"} }}>
            <img
              src={profile_logo}
              alt="profile-img"
              style={{ width: "15%", borderRadius: "3px" }}
            />
            <Stack gap={"5px"} width={"50%"}>
              <p>softangelstims</p>
              <p>love</p>
            </Stack>
            <Stack alignItems={"center"} direction={"row"} gap={"15px"}>
              <p style={{ color: "#00b6f7" }}>Follow</p>
              <i>x</i>
            </Stack>
          </Box>
          <Box sx={{ display: "flex", gap: "10px",  fontSize:'14px',  padding: "10px" ,"&:hover": { backgroundColor: "#2c2c2c"} }}>
            <img
              src={profile_logo}
              alt="profile-img"
              style={{ width: "15%", borderRadius: "3px" }}
            />
            <Stack gap={"5px"} width={"50%"}>
              <p>softangelstims</p>
              <p>love</p>
            </Stack>
            <Stack alignItems={"center"} direction={"row"} gap={"15px"}>
              <p style={{ color: "#00b6f7", hover: "" }}>Follow</p>
              <i>x</i>
            </Stack>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", padding: "10px" ,  fontSize:'14px', "&:hover": { backgroundColor: "#2c2c2c"}}}>
            <img
              src={profile_logo}
              alt="profile-img"
              style={{ width: "15%", borderRadius: "3px" }}
            />
            <Stack gap={"5px"} width={"50%"}>
              <p>softangelstims</p>
              <p>love</p>
            </Stack>
            <Stack alignItems={"center"} direction={"row"} gap={"15px"}>
              <p style={{ color: "#00b6f7" }}>Follow</p>
              <i>x</i>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", paddingTop: "20px", color: "#00b6f7" }}>
          <h4 style={{cursor:'pointer'}}>Show more Blogs</h4>
        </Box>
      </Box>
    </Box>
  );
};

export default RightNav;
