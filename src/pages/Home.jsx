// // import { Box, Button, FormControl, IconButton, InputAdornment, Skeleton, TextField } from "@mui/material";
// // import SearchIcon from '@mui/icons-material/Search';
// // import React, { useContext, useEffect, useState } from "react";
// // import Card from "./Card";
// // import CardDataContext from "../providers/cardData/CardDataContext";
// // import { toast } from "react-toastify";
// // import { fetchGitHubUser } from "../providers/cardData/CardDataAction";

// // const Home = () =>{

// //   const {dispatch , state} = useContext(CardDataContext)

// //   const [username , setUsername] = useState('');


// //   const SearchUserData = async (username) => {
// // try {
// //   const data = await fetchGitHubUser(username);
// // if (data.error) {
// //   toast.error(data.error);
// // }
// // else {
// //   dispatch({
// //     type : "FETCH_USER_DATA",
// //     payload : data
// //   })
// // }
// // } catch (error) {
// //   toast.error("Something went wrong");
// // }
// //   }

// //   // const SearchData = async (e) => {
// //   //   e.preventDefault();
// //   //   SearchUserData(username);
// //   //   setUsername('');
// //   // }

// //   const SearchData = async (e) => {
// //     e.preventDefault();
// //     if (username.trim()) {
// //       await SearchUserData(username);
// //       setUsername('');
// //     } else {
// //       toast.warn("Please enter a username.");
// //     }
// //   };


// // useEffect(() => {
// //   SearchUserData('');
// // }, []);


// // return(
// //     <>
// //      <FormControl onSubmit={SearchData} fullWidth height="100vh" component="form" noValidate autoComplete="off" sx={{margin : '200px 10px 30px', width : '45%'}}>
   
// //    <Box
// //       sx={{
// //         display: 'flex',
// //         alignItems: 'center',
// //         backgroundColor: '#e9ecf2',
// //         borderRadius: '15px',
// //         overflow: 'hidden',
// //         width: 'auto',
// //         boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
// //         height : '60px',
// //       }}
// //     >
// //       <TextField
// //         variant="standard"
// //         placeholder="Search Here"
// //         onChange={(e) => setUsername(e.target.value)}
// //         value={username}
// //         InputProps={{
// //           disableUnderline: true,         
// //         }}
// //         sx={{
// //           flex: 1,
// //           padding: '10px 20px',
// //           fontSize: '1rem',
// //           color: '#888',
// //           '& .MuiInputBase-input': {
// //             padding: 0,
// //           },
// //         }}
// //       />
// //       <IconButton
// //         type="submit"
// //         sx={{
// //           background: 'linear-gradient(90deg, #1e2024, #1c1f2b)',
// //           color: 'white',
// //           borderRadius: 0,
// //           padding: '10px 20px',
// //           '&:hover': {
// //             background: 'linear-gradient(90deg, #1c1f2b, #1e2024)',
            
// //           },
// //         }}
// //       >
// //         <SearchIcon sx={{fontSize : '30px'}} />
// //         <span style={{ fontWeight: 600 , height : '60px', display : 'flex', alignItems : 'center' }}>SEARCH</span>
// //       </IconButton>
// //     </Box>
   
// //     </FormControl> 

// //     {
// //      Card.length === 0 ? (
// //       <Box>
// //         <Skeleton variant="circular" width={60} height={60} sx={{ marginBottom: "10px" }} />
// //         <Skeleton variant="text" width="60%" height={30} sx={{ marginTop: "10px" }} />
// //         <Skeleton variant="text" width="40%" height={20} sx={{ marginTop: "5px" }} />
// //       </Box>
// //      ) : (
// //       <Card />
// //      )
// //     }
// //     </>
// // )
// // }


// // export default Home



// // In Chat-GPT

// import { Box, FormControl, IconButton, Skeleton, TextField } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
// import React, { useContext, useEffect, useState } from "react";
// import Card from "./Card";
// import CardDataContext from "../providers/cardData/CardDataContext";
// import { toast } from "react-toastify";
// import { fetchGitHubUser } from "../providers/cardData/CardDataAction";

// const Home = () => {
//   const { state = {}, dispatch } = useContext(CardDataContext); // Use default object for state
//   // const { Details = [] } = state; // Fallback to empty array if Details is undefined

// const Details = state?.Details || []; // Use optional chaining and fallback


//   const [username, setUsername] = useState('');

//   const SearchUserData = async (username) => {
//     try {
//       const data = await fetchGitHubUser(username);
//       // console.log("Dispatched Data:", data);
//       if (data.error) {
//         toast.error(data.error);
//       } else {
//         dispatch({
//           type: "FETCH_USER_DATA",
//           payload: data,
//         });
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     }
//   };

//   const SearchData = async (e) => {
//     e.preventDefault();
//     if (username.trim()) {
//       await SearchUserData(username);
//       setUsername('');
//     } else {
//       toast.warn("Please enter a username.");
//     }
//   };

//   useEffect(() => {
//     SearchUserData(''); // Fetch data on initial load if needed
//   }, []);

//   return (
//     <>
//       <FormControl
//         onSubmit={SearchData}
//         fullWidth
//         height="100vh"
//         component="form"
//         noValidate
//         autoComplete="off"
//         sx={{ margin: '200px 10px 30px', width: '45%' }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             backgroundColor: '#e9ecf2',
//             borderRadius: '15px',
//             overflow: 'hidden',
//             width: 'auto',
//             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//             height: '60px',
//           }}
//         >
//           <TextField
//             variant="standard"
//             placeholder="Search Here"
//             onChange={(e) => setUsername(e.target.value)}
//             value={username}
//             InputProps={{
//               disableUnderline: true,
//             }}
//             sx={{
//               flex: 1,
//               padding: '10px 20px',
//               fontSize: '1rem',
//               color: '#888',
//               '& .MuiInputBase-input': {
//                 padding: 0,
//               },
//             }}
//           />
//           <IconButton
//             type="submit"
//             sx={{
//               background: 'linear-gradient(90deg, #1e2024, #1c1f2b)',
//               color: 'white',
//               borderRadius: 0,
//               padding: '10px 20px',
//               '&:hover': {
//                 background: 'linear-gradient(90deg, #1c1f2b, #1e2024)',
//               },
//             }}
//           >
//             <SearchIcon sx={{ fontSize: '30px' }} />
//             <span
//               style={{
//                 fontWeight: 600,
//                 height: '60px',
//                 display: 'flex',
//                 alignItems: 'center',
//               }}
//             >
//               SEARCH
//             </span>
//           </IconButton>
//         </Box>
//       </FormControl>

//       {/* Conditionally render skeleton or Card based on Details */}
//       {Details.length === 0 ? (
//         <Box>
//           <Skeleton variant="circular" width={60} height={60} sx={{ marginBottom: "10px" }} />
//           <Skeleton variant="text" width="60%" height={30} sx={{ marginTop: "10px" }} />
//           <Skeleton variant="text" width="40%" height={20} sx={{ marginTop: "5px" }} />
//         </Box>
//       ) : (
//         <Card /> // Pass Details to Card as props
//       )}
//     </>
//   );
// };

// export default Home;

































import { Box, FormControl, IconButton, Skeleton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import CardDataContext from "../providers/cardData/CardDataContext";
import { toast } from "react-toastify";
import { fetchGitHubUser } from "../providers/cardData/CardDataAction";

const Home = () => {
  // Use default value for state to avoid destructuring errors
  const { state = {}, dispatch } = useContext(CardDataContext);
  const Details = state?.Details || []; // Fallback if Details is undefined

  const [username, setUsername] = useState('');

  const SearchUserData = async (username) => {
    try {
      const data = await fetchGitHubUser(username);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch({
          type: "FETCH_USER_DATA",
          payload: data,
        });
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const SearchData = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      await SearchUserData(username);
      setUsername(''); // Clear the input after search
    } else {
      toast.warn("Please enter a username.");
    }
  };

  // Removing SearchUserData call from useEffect since you only need to search on user input
  // useEffect(() => {
  //   SearchUserData(''); 
  // }, []);

  return (
    <>
      <FormControl
        onSubmit={SearchData}
        fullWidth
        height="100vh"
        component="form"
        noValidate
        autoComplete="off"
        sx={{ margin: '200px 10px 30px', width: '45%' }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#e9ecf2',
            borderRadius: '15px',
            overflow: 'hidden',
            width: 'auto',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            height: '60px',
          }}
        >
          <TextField
            variant="standard"
            placeholder="Search Here"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              flex: 1,
              padding: '10px 20px',
              fontSize: '1rem',
              color: '#888',
              '& .MuiInputBase-input': {
                padding: 0,
              },
            }}
          />
          <IconButton
            type="submit"
            sx={{
              background: 'linear-gradient(90deg, #1e2024, #1c1f2b)',
              color: 'white',
              borderRadius: 0,
              padding: '10px 20px',
              '&:hover': {
                background: 'linear-gradient(90deg, #1c1f2b, #1e2024)',
              },
            }}
          >
            <SearchIcon sx={{ fontSize: '30px' }} />
            <span
              style={{
                fontWeight: 600,
                height: '60px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              SEARCH
            </span>
          </IconButton>
        </Box>
      </FormControl>

      {/* Conditionally render skeleton or Card based on Details */}
      {Details.length === 0 ? (
        <Box>
          <Skeleton variant="circular" width={60} height={60} sx={{ marginBottom: "10px" }} />
          <Skeleton variant="text" width="60%" height={30} sx={{ marginTop: "10px" }} />
          <Skeleton variant="text" width="40%" height={20} sx={{ marginTop: "5px" }} />
        </Box>
      ) : (
        <Card Details={Details} /> // Pass Details to Card as props
      )}
    </>
  );
};

export default Home;
