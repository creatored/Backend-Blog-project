import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import userImg from "../assets/img2.jpg";
import useImg from "../assets/feed2img.jpg";

const Trending = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        // Extract the posts data from the response
        setData(result.data || []);
      } catch (error) {
        setError(error.message);
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData("http://localhost:3000/api/v1/users/posts");
  }, []);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  return (
    <Box>
      {data.length === 0 ? (
        <Box>No posts available.</Box>
      ) : (
        data.map((post) => (
          <Box
            key={post._id}
            sx={{ margin: "20px", bgcolor: "#222222", borderRadius: "5px" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "5px",
              }}
            >
              <span className="userPostcard">
                <img src={userImg} alt="userImg" />
                <p className="followbtn">Follow</p>
              </span>
              <p>...</p>
            </Box>
            <Box>
              <img src={useImg} alt="Post" style={{ width: "100%" }} />
            </Box>
            <Box>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </Box>
            <Box>
              <span style={{ paddingTop: "30px" }}>#tags</span>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                padding={"10px 0"}
              >
                <button>notes</button>
                <span>repost, share, like</span>
              </Stack>
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default Trending;
