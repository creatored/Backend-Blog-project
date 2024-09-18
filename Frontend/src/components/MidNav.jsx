import { useState } from "react";
import { Box, List, ListItem, Stack, MenuItem } from "@mui/material";
import Trending from "./trending";
import ExpandCircleDownSharpIcon from "@mui/icons-material/ExpandCircleDownSharp";

import Carousel from "./Slider";

const MidNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownOptions = [
    "Text",
    "Photos",
    "Gifs",
    "Quotes",
    "Chats",
    "Audio",
    "Videos",
    "Asks",
  ];

  return (
    <Box
      sx={{
        width: "50%",
        borderLeft: "1px solid #1d1d1d",
        borderRight: "1px solid #1d1d1d",
        fontFamily: "sans-serif",
        position:'relative'
      }}
    >
      <Stack>
        <List
          sx={{
            display: "flex",
            alignContent: "center",
            textAlign: "center",
            padding: "0",
            width: "85%",
            gap: "0",
            borderBottom: "1px solid #1d1d1d",
          }}
        >
          <ListItem
            sx={{
              borderBottom: activeIndex === 0 ? "2px solid #00b8ff" : "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              color: activeIndex === 0 ? "white" : "#a6a6a6",
              fontSize: "18px",
              fontFamily: "MyFont, sans-serif",
              padding: "15px 0",
              "&:hover": {
                backgroundColor: "#1d1d1d",
              },
            }}
            onClick={() => handleItemClick(0)}
          >
            Trending
          </ListItem>
          <ListItem
            sx={{
              borderBottom: activeIndex === 1 ? "2px solid #00b8ff" : "none",
              cursor: "pointer",
              color: activeIndex === 1 ? "white" : "#a6a6a6",
              fontSize: "18px",
              fontFamily: "MyFont, sans-serif",
              alignItems: "center",
              display: "flex",
              padding: "15px 0",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#1d1d1d",
              },
            }}
            onClick={() => handleItemClick(1)}
          >
            Staff Picks
          </ListItem>
          <ListItem
            sx={{
              borderBottom: activeIndex === 2 ? "2px solid #00b8ff" : "none",
              cursor: "pointer",
              color: activeIndex === 2 ? "white" : "#a6a6a6",
              fontSize: "18px",
              fontFamily: "MyFont, sans-serif",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#1d1d1d",
              },
              textAlign: "center",
              padding: "15px 0",
            }}
            onClick={() => handleItemClick(2)}
          >
            Answer Time
          </ListItem>
          <ListItem
            sx={{
              borderBottom: activeIndex === 3 ? "2px solid #00b8ff" : "none",
              cursor: "pointer",
              textAlign: "center",
              color: activeIndex === 3 ? "white" : "#a6a6a6",
              fontSize: "18px",
              fontFamily: "MyFont, sans-serif",
              display: "flex",
              justifyContent: "center",
              padding: "15px 0",
              "&:hover": {
                backgroundColor: "#1d1d1d",
              },
            }}
            onClick={toggleDropdown}
          >
            More
            <ExpandCircleDownSharpIcon
              sx={{ fontSize: "20px", color: "#a6a6a6", marginLeft: "5px" }}
            />
          </ListItem>
        </List>
        <Carousel />
      </Stack>
      {isDropdownOpen && (
        <Box sx={{ position:'absolute', right: 0 , bgcolor: "#1d1d1d", color: "white", borderRadius:'5px', boxShadow: "0px 0px 10px 0px rgb(0 0 0 / 20%)"}}>
          {dropdownOptions.map((option, index) => (
            <MenuItem key={index} sx={{ padding: "5px 60px" , "&:hover": {
              backgroundColor:'#3F3F3F'
            } }}>
              {option}
            </MenuItem>
          ))}
        </Box>
      )}
      {activeIndex === 0 && <Trending />}
    </Box>
  );
}

export default MidNav;
