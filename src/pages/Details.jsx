
// import React from "react";
// import { Box, Avatar, Typography, Link, Button } from "@mui/material";
// import { styled } from "@mui/system";

// const Container = styled(Box)({
//   backgroundColor: "#141D2F",
//   minHeight: "100vh",
//   padding: "90px 20px 20px",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   color: "#FFFFFF",
// });

// const Header = styled(Box)({
//   width: "100%",
//   maxWidth: "730px",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: "20px",
// });

// const SearchBox = styled(Box)({
//   display: "flex",
//   alignItems: "center",
//   width: "100%",
//   maxWidth: "730px",
//   backgroundColor: "#1F2A48",
//   borderRadius: "10px",
//   padding: "10px 15px",
//   marginBottom: "20px",
// });

// const SearchInput = styled("input")({
//   flex: 1,
//   backgroundColor: "transparent",
//   border: "none",
//   outline: "none",
//   color: "#FFFFFF",
//   fontSize: "16px",
// });

// const Card = styled(Box)({
//   width: "100%",
//   maxWidth: "730px",
//   backgroundColor: "#1F2A48",
//   borderRadius: "10px",
//   padding: "20px",
//   display: "flex",
//   color: "#FFFFFF",
//   flexDirection: "column",
// });

// const UserInfo = styled(Box)({
//   display: "flex",
//   alignItems: "center",
//   marginBottom: "20px",
// });

// const UserDetails = styled(Box)({
//   marginLeft: "20px",
//   flex: 1,
// });

// const StatsBox = styled(Box)({
//   display: "flex",
//   justifyContent: "space-between",
//   backgroundColor: "#141D2F",
//   padding: "15px 20px",
//   borderRadius: "10px",
//   marginTop: "20px",
// });

// const Stat = styled(Box)({
//   textAlign: "center",
// });

// const AdditionalInfo = styled(Box)({
//   display: "flex",
//   justifyContent: "space-between",
//   marginTop: "20px",
//   flexWrap: "wrap",
// });

// const UserProfileCard = ({card}) => {
//   return (
//     <Container>
//       {/* <Header>
//         <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
//           devfinder
//         </Typography>
//         <Button sx={{ color: "#FFFFFF" }}>LIGHT 🌞</Button>
//       </Header> */}

//       <SearchBox>
//         <SearchInput placeholder="Search GitHub username" />
//         <Button variant="contained" color="primary" sx={{ ml: 1 }}>
//           Search
//         </Button>
//       </SearchBox>

//       <Card>
//         <UserInfo>
//           <Avatar
//             src={card?.avatar_url || "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}
//             alt="GitHub Octocat"
//             sx={{ width: 100, height: 100 }}
//           />
//           <UserDetails>
//             <Typography variant="h5">{card?.name}</Typography>
//             <Link href="#" underline="none" sx={{ color: "#0079ff", fontSize: "16px" }}>
//               {card?.login}
//             </Link>
//             <Typography variant="body2" sx={{ color: "#A3A3A3", marginTop: 1 }}>
//               {card?.bio}
//             </Typography>
//           </UserDetails>
//           <Typography variant="body2" sx={{ color: "#A3A3A3" }}>
//             {card?.created_at}
//           </Typography>
//         </UserInfo>

//         <StatsBox>
//           <Stat>
//             <Typography variant="body2">Repositries</Typography>
//             <Typography variant="h6">{card?.public_repos}</Typography>
//           </Stat>
//           <Stat>
//             <Typography variant="body2">Followers</Typography>
//             <Typography variant="h6">{card?.followers}</Typography>
//           </Stat>
//           <Stat>
//             <Typography variant="body2">Following</Typography>
//             <Typography variant="h6">{card?.following}</Typography>
//           </Stat>
//         </StatsBox>

//         <AdditionalInfo>
//           <Typography variant="body2" sx={{ display: "flex", alignItems: "center", color: "#A3A3A3" }}>
//             {card?.company}
//           </Typography>
//           <Link href="https://github.blog" underline="none" sx={{ color: "#0079ff" }}>
//             {card?.blog}
//           </Link>
//           <Typography variant="body2" sx={{ color: "#A3A3A3" }}>
//             {card?.location}
//           </Typography>
//         </AdditionalInfo>
//       </Card>
//     </Container>
//   );
// };

// export default UserProfileCard;







// In Chat-GPT

import React from "react";
import { Box, Avatar, Typography, Link, Button } from "@mui/material";
import { styled } from "@mui/system";

// Function to format the date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options); // Formats to 'MMM dd, yyyy'
};

const Container = styled(Box)({
  backgroundColor: "#141D2F",
  minHeight: "100vh",
  padding: "90px 20px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#FFFFFF",
});

const Header = styled(Box)({
  width: "100%",
  maxWidth: "730px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
});

const SearchBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: "730px",
  backgroundColor: "#1F2A48",
  borderRadius: "10px",
  padding: "10px 15px",
  marginBottom: "20px",
});

const SearchInput = styled("input")({
  flex: 1,
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  color: "#FFFFFF",
  fontSize: "16px",
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

const UserProfileCard = ({ card }) => {
  return (
    <Container>
      <SearchBox>
        <SearchInput placeholder="Search GitHub username" />
        <Button variant="contained" color="primary" sx={{ ml: 1 }}>
          Search
        </Button>
      </SearchBox>

      <Card>
        <UserInfo>
          <Avatar
            src={card?.avatar_url || "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}
            alt="GitHub Octocat"
            sx={{ width: 100, height: 100 }}
          />
          <UserDetails>
            <Typography variant="h5">{card?.name}</Typography>
            <Link href="#" underline="none" sx={{ color: "#0079ff", fontSize: "16px" }}>
              {card?.login}
            </Link>
            <Typography variant="body2" sx={{ color: "#A3A3A3", marginTop: 1 }}>
              {card?.bio}
            </Typography>
          </UserDetails>
          {/* Use formatDate here to display formatted created_at date */}
          <Typography variant="body2" sx={{ color: "#A3A3A3" }}>
            {card?.created_at ? formatDate(card.created_at) : "N/A"}
          </Typography>
        </UserInfo>

        <StatsBox>
          <Stat>
            <Typography variant="body2">Repositries</Typography>
            <Typography variant="h6">{card?.public_repos}</Typography>
          </Stat>
          <Stat>
            <Typography variant="body2">Followers</Typography>
            <Typography variant="h6">{card?.followers}</Typography>
          </Stat>
          <Stat>
            <Typography variant="body2">Following</Typography>
            <Typography variant="h6">{card?.following}</Typography>
          </Stat>
        </StatsBox>

        <AdditionalInfo>
          <Typography variant="body2" sx={{ display: "flex", alignItems: "center", color: "#A3A3A3" }}>
            {card?.company}
          </Typography>
          <Link href="https://github.blog" underline="none" sx={{ color: "#0079ff" }}>
            {card?.blog}
          </Link>
          <Typography variant="body2" sx={{ color: "#A3A3A3" }}>
            {card?.location}
          </Typography>
        </AdditionalInfo>
      </Card>
    </Container>
  );
};

export default UserProfileCard;































// In 768px width

// import React from "react";
// import { Box, Avatar, Typography, Button, Link } from "@mui/material";
// import { styled } from "@mui/system";

// const CardContainer = styled(Box)(({ theme }) => ({
//   backgroundColor: "#1E2A47",
//   color: "#FFF",
//   padding: theme.spacing(4),
//   borderRadius: theme.shape.borderRadius,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   maxWidth: 400,
//   margin: "auto",
// }));

// const Header = styled(Box)({
//   display: "flex",
//   justifyContent: "space-between",
//   width: "100%",
// });

// const UserInfo = styled(Box)({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// });

// const StatsContainer = styled(Box)({
//   display: "flex",
//   justifyContent: "space-between",
//   width: "100%",
//   backgroundColor: "#141D2F",
//   padding: "8px 16px",
//   borderRadius: "10px",
//   marginTop: "16px",
// });

// const Stat = styled(Box)({
//   textAlign: "center",
//   color: "#FFF",
// });

// const UserProfileCard = () => {
//   return (
//     <CardContainer>
//       <Header>
//         <Typography variant="h6" sx={{ color: "#FFF" }}>
//           devfinder
//         </Typography>
//         <Button sx={{ color: "#FFF" }}>LIGHT</Button>
//       </Header>

//       <UserInfo>
//         <Avatar
//           src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
//           alt="GitHub Octocat"
//           sx={{ width: 80, height: 80, marginBottom: 2 }}
//         />
//         <Typography variant="h5">The Octocat</Typography>
//         <Link href="#" underline="none" sx={{ color: "#0079ff" }}>
//           @octocat
//         </Link>
//         <Typography variant="body2" sx={{ color: "#A3A3A3", marginY: 1 }}>
//           This profile has no bio
//         </Typography>
//         <Typography variant="body2" sx={{ color: "#A3A3A3" }}>
//           Joined 25 Jan 2011
//         </Typography>
//       </UserInfo>

//       <StatsContainer>
//         <Stat>
//           <Typography variant="body2">Repos</Typography>
//           <Typography variant="h6">8</Typography>
//         </Stat>
//         <Stat>
//           <Typography variant="body2">Followers</Typography>
//           <Typography variant="h6">11020</Typography>
//         </Stat>
//         <Stat>
//           <Typography variant="body2">Following</Typography>
//           <Typography variant="h6">9</Typography>
//         </Stat>
//       </StatsContainer>

//       <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}>
//         <Typography variant="body2" sx={{ display: "flex", alignItems: "center", color: "#A3A3A3" }}>
//           📍 San Francisco
//         </Typography>
//         <Link href="https://github.blog" underline="none" sx={{ color: "#0079ff", mt: 1 }}>
//           https://github.blog
//         </Link>
//         <Typography variant="body2" sx={{ color: "#A3A3A3", mt: 1 }}>
//           @github
//         </Typography>
//       </Box>
//     </CardContainer>
//   );
// };

// export default UserProfileCard;

