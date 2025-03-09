
// // In 768px width

// // import React from "react";
// // import { Box, Avatar, Typography, Button, Link } from "@mui/material";
// // import { styled } from "@mui/system";

// // const CardContainer = styled(Box)(({ theme }) => ({
// //   backgroundColor: "#1E2A47",
// //   color: "#FFF",
// //   padding: theme.spacing(4),
// //   borderRadius: theme.shape.borderRadius,
// //   display: "flex",
// //   flexDirection: "column",
// //   alignItems: "center",
// //   maxWidth: 400,
// //   margin: "auto",
// // }));

// // const Header = styled(Box)({
// //   display: "flex",
// //   justifyContent: "space-between",
// //   width: "100%",
// // });

// // const UserInfo = styled(Box)({
// //   display: "flex",
// //   flexDirection: "column",
// //   alignItems: "center",
// // });

// // const StatsContainer = styled(Box)({
// //   display: "flex",
// //   justifyContent: "space-between",
// //   width: "100%",
// //   backgroundColor: "#141D2F",
// //   padding: "8px 16px",
// //   borderRadius: "10px",
// //   marginTop: "16px",
// // });

// // const Stat = styled(Box)({
// //   textAlign: "center",
// //   color: "#FFF",
// // });

// // const UserProfileCard = () => {
// //   return (
// //     <CardContainer>
// //       <Header>
// //         <Typography variant="h6" sx={{ color: "#FFF" }}>
// //           devfinder
// //         </Typography>
// //         <Button sx={{ color: "#FFF" }}>LIGHT</Button>
// //       </Header>

// //       <UserInfo>
// //         <Avatar
// //           src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
// //           alt="GitHub Octocat"
// //           sx={{ width: 80, height: 80, marginBottom: 2 }}
// //         />
// //         <Typography variant="h5">The Octocat</Typography>
// //         <Link href="#" underline="none" sx={{ color: "#0079ff" }}>
// //           @octocat
// //         </Link>
// //         <Typography variant="body2" sx={{ color: "#A3A3A3", marginY: 1 }}>
// //           This profile has no bio
// //         </Typography>
// //         <Typography variant="body2" sx={{ color: "#A3A3A3" }}>
// //           Joined 25 Jan 2011
// //         </Typography>
// //       </UserInfo>

// //       <StatsContainer>
// //         <Stat>
// //           <Typography variant="body2">Repos</Typography>
// //           <Typography variant="h6">8</Typography>
// //         </Stat>
// //         <Stat>
// //           <Typography variant="body2">Followers</Typography>
// //           <Typography variant="h6">11020</Typography>
// //         </Stat>
// //         <Stat>
// //           <Typography variant="body2">Following</Typography>
// //           <Typography variant="h6">9</Typography>
// //         </Stat>
// //       </StatsContainer>

// //       <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}>
// //         <Typography variant="body2" sx={{ display: "flex", alignItems: "center", color: "#A3A3A3" }}>
// //           📍 San Francisco
// //         </Typography>
// //         <Link href="https://github.blog" underline="none" sx={{ color: "#0079ff", mt: 1 }}>
// //           https://github.blog
// //         </Link>
// //         <Typography variant="body2" sx={{ color: "#A3A3A3", mt: 1 }}>
// //           @github
// //         </Typography>
// //       </Box>
// //     </CardContainer>
// //   );
// // };

// // export default UserProfileCard;



// this is my code


import React, { useContext, useEffect } from "react";
import { Box, Avatar, Typography, Link, Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { toast } from "react-toastify";
import CardDataContext from "../providers/cardData/CardDataContext";
import { fetchGitHubUserData } from "../providers/cardData/CardDataAction";
import { useParams } from "react-router-dom";

// Format date function
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// Styled components
const Container = styled(Box)({
  backgroundColor: "#141D2F",
  minHeight: "100vh",
  padding: "90px 20px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#FFFFFF",
});

const Card = styled(Box)({
  width: "100%",
  maxWidth: "730px",
  backgroundColor: "#1F2A48",
  borderRadius: "10px",
  padding: "20px",
  display: "flex",
  color: "#FFFFFF",
  flexDirection: "column",
});

const UserInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
});

const UserDetails = styled(Box)({
  marginLeft: "20px",
  flex: 1,
});

const StatsBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#141D2F",
  padding: "15px 20px",
  borderRadius: "10px",
  marginTop: "20px",
});

const Stat = styled(Box)({
  textAlign: "center",
});

const AdditionalInfo = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
  flexWrap: "wrap",
});

const UserProfileCard = () => {
  const { Details, dispatch, loading } = useContext(CardDataContext);
  const { username } = useParams();

  // Fetch user details from GitHub API
  const fetchUserDetails = async (username) => {
    if (!username) return;

    try {
      const result = await fetchGitHubUserData(username);
      if (result.error) {
        dispatch({ type: "SET_ERROR", payload: result.error });
        toast.error(result.error);
      } else {
        dispatch({ type: "FETCH_USER_DATA_DETAILS", payload: result });
      }
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: "Something went wrong!" });
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    fetchUserDetails(username);
  }, [username, dispatch]);

  if (loading) {
    return (
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
          <CircularProgress size={60} thickness={4} sx={{ color: '#0079ff' }} />
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Card>
        <UserInfo>
          <Avatar
            src={Details?.avatar_url || "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}
            alt={Details?.login || "GitHub Octocat"}
            sx={{ width: 100, height: 100 }}
          />
          <UserDetails>
            <Typography variant="h5">{Details?.name}</Typography>
            <Link
              href={`https://github.com/${Details?.login}`}
              target="_blank"
              underline="none"
              sx={{ color: "#0079ff" }}
            >
              @{Details?.login}
            </Link>
            <Typography variant="body2" sx={{ color: "#A3A3A3", marginTop: 1 }}>
              {Details?.bio || 'No bio available'}
            </Typography>
          </UserDetails>
          <Typography variant="body2" sx={{ color: "#A3A3A3" }}>
            {Details?.created_at ? formatDate(Details.created_at) : "N/A"}
          </Typography>
        </UserInfo>

        <StatsBox>
          <Stat>
            <Typography variant="body2">Repositories</Typography>
            <Typography variant="h6">{Details?.public_repos}</Typography>
          </Stat>
          <Stat>
            <Typography variant="body2">Followers</Typography>
            <Typography variant="h6">{Details?.followers}</Typography>
          </Stat>
          <Stat>
            <Typography variant="body2">Following</Typography>
            <Typography variant="h6">{Details?.following}</Typography>
          </Stat>
        </StatsBox>

        <AdditionalInfo>
          <Typography variant="body2" sx={{ color: "#A3A3A3" }}>
            {Details?.company}
          </Typography>
          <Link href={Details?.blog || "#"} underline="none" sx={{ color: "#0079ff" }}>
            {Details?.blog || "N/A"}
            {Details.repos_url}
          </Link>
          <Typography variant="body2" sx={{ color: "#A3A3A3" }}>
            {Details?.location}
          </Typography>
        </AdditionalInfo>
      </Card>
    </Container>
  );
};

export default UserProfileCard;


