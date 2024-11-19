
import React from "react";
import { Box, Avatar, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";

const CardContainer = styled(Box)({
  width: "300px",
  backgroundColor: "#3D4759", // Dark grayish background color to match the card
  padding: "20px 30px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#FFFFFF",
  transition: "transform 0.2s", 
  "&:hover": {
    transform: "translateY(-5px)",
  },
});

const ProfileAvatar = styled(Avatar)({
  width: "60px",
  height: "60px",
  marginBottom: "10px",
});

const Cards = ({ card }) => {  

  const navigate = useNavigate(); // Add this hook

  const handleViewProfile = () => {
    if (card?.login) {
      console.log("Navigating to profile of:", card.login);
      navigate(`/userprofile/${card.login}`);
    }
  };

  return (
    <CardContainer>
      <ProfileAvatar src={card?.avatar_url || "https://avatars.githubusercontent.com/u/583231?v=4"} alt="Profile Picture" />
      <Typography variant="h6" sx={{ marginTop: "10px", fontWeight: "bold" }}>
        {card?.login}
      </Typography>

      <Link
        to={`/userprofile/${card?.login}`}
          style={{ marginTop: "5px", textDecoration: "none", color: "#FFFFFF" }}
        
      >
       <Button 
          variant="contained" 
          fullWidth
          onClick={handleViewProfile}
          sx={{
            backgroundColor: "#0079ff",
            "&:hover": {
              backgroundColor: "#0056b3"
            }
          }}
        >
          View Profile
        </Button>
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