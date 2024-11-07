
import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const CardContainer = styled(Box)({
  width: "300px",
  backgroundColor: "#3D4759", // Dark grayish background color to match the card
  padding: "20px 30px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#FFFFFF",
});

const ProfileAvatar = styled(Avatar)({
  width: "60px",
  height: "60px",
  marginBottom: "10px",
});

const Cards = ({ Details }) => {  // Change the prop name to 'Details'

  console.log(Details);

  return (
    <CardContainer>
      <ProfileAvatar src={Details?.avatar_url || "https://avatars.githubusercontent.com/u/583231?v=4"} alt="Profile Picture" />
      <Typography variant="h6" sx={{ marginTop: "10px", fontWeight: "bold" }}>
        {Details?.login}
      </Typography>

      <Link
        to={{
          pathname: "/userprofile",
          state: { Details }, // Pass the 'Details' data via state
        }}
        style={{ marginTop: "5px", textDecoration: "none", color: "#FFFFFF" }}
      >
        Visit Profile
      </Link>
    </CardContainer>
  );
};

export default Cards;



{/* <CardContainer>
<Skeleton variant="circular" width={60} height={60} sx={{ marginBottom: "10px" }} />
<Skeleton variant="text" width="60%" height={30} sx={{ marginTop: "10px" }} />
<Skeleton variant="text" width="40%" height={20} sx={{ marginTop: "5px" }} />
</CardContainer> */}