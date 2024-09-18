import {
  Box,
  List,
  ListItem,
  Button,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import PaletteIcon from "@mui/icons-material/Palette";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../assets/logo.png";
// import { useState } from "react";
// import CreateContentModal from "./Createcontent";
import Logo from "../assets/Tumblr_Logos.png";
import { useAuth } from "./AuthContext";

const LeftNav = () => {
  const { loggedIn, logout, username} = useAuth();
  //  const [openModal, setOpenModal] = useState(false);

   const handleOpenModal = () => {
     setOpenModal(true);
 };

  return (
    <>
      <Box sx={{ width: "21%" }}>
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: "40%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "20px",
            paddingBottom: "10px",
          }}
        />
          <List>
            {loggedIn ? ( 
              <>
                <ListItem disablePadding>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="Explore" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="Activity" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="Messages" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="Inbox" />
                </ListItem>
                <Accordion
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  disableGutters
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    sx={{ margin: "0", padding: "0" }}
                  >
                    <ListItemText
                      primary="Account"
                      sx={{ margin: "0", padding: "0" }}
                    />
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: 0,
                    }}
                  >
                    <hr />
                    <List>
                      <ListItem
                        disablePadding
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingRight: "2px",
                        }}
                      >
                        <ListItemText primary="Likes" />
                        <p>0</p>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary="Following" />
                        <p>0</p>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary="Log out" onClick={logout} />
                      </ListItem>
                      <ListItem
                        disablePadding
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingRight: "2px",
                        }}
                      >
                        <ListItemText primary="Blogs" />
                        <p>+ New</p>
                      </ListItem>
                      <hr />
                      <ListItem disablePadding>
                        <Stack direction={"row"} gap={3} padding={"5px"}>
                          <img
                            src={logo}
                            alt="avater"
                            style={{ width: "35px", borderRadius: "5px" }}
                          />
                          <span>
                            <h5></h5>
                            <p className="pclass">{ username || " ntitled" }</p>
                          </span>
                        </Stack>
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
                <ListItem disablePadding sx={{ margin: "0", padding: "0" }}>
                  <ListItemText primary="Settings" />
                </ListItem>
                <ListItem disablePadding sx={{ margin: "0", padding: "0" }}>
                  <ListItemText primary="TumblrMart" />
                </ListItem>
                <ListItem disablePadding sx={{ margin: "0", padding: "0" }}>
                  <ListItemText primary="Get a Domain" />
                </ListItem>
                <ListItem disablePadding>
                  <Button
                    variant="contained"
                    sx={{
                      padding: "5px 50px",
                      borderRadius: "5px",
                      marginTop: "100%",
                      position: "sticky",
                      zIndex: "99",
                    }}
                    onClick={handleOpenModal}
                  >
                    Create
                  </Button>
                </ListItem>
              </>
            ) : (
              <>
                <ListItem sx={
                    { fontSize: "18px", "&:hover":{ bgcolor:'rgb(34,34,34)'}, padding: '5px 0',cursor:'pointer'}
                    } >
                  <ExploreOutlinedIcon
                    sx={{ fontSize: "19px", marginRight: "10px" }}
                  />
                  <ListItemText primary="Explore" />
                </ListItem>
                <ListItem sx={
                    { fontSize: "18px", "&:hover":{ bgcolor:'rgb(34,34,34)'},cursor:'pointer', padding: '5px 0', color:'rgb(100,100 ,100)'}} >
                  <PaletteIcon sx={{ fontSize: "18px", marginRight: "10px" }} />
                  <ListItemText primary=" Change Palette" />
                </ListItem>
              </>
            )}
          </List>
          {/* {openModal ? <CreateContentModal /> : null} */}
        </Box>

    </>
  );
};

export default LeftNav;
