
import { Box, FormControl, IconButton, Skeleton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React, { useContext, useEffect, useState } from "react";
import CardDataContext from "../providers/cardData/CardDataContext.jsx";
import Cards from "../components/Cards";
import { toast } from "react-toastify";
import { fetchGitHubUserData, fetchGitHubUsers } from "../providers/cardData/CardDataAction.jsx";
import UserDataContext from "../providers/usersData/UserDataContext.jsx";

const Home = () => {

  const {dispatch , Details } = useContext( CardDataContext );

  const [username, setUsername] = useState('');

  const SearchUserData = async (username) => {
    dispatch({type : "SET_LOADING  "});
    try {
      const data = await fetchGitHubUsers(username);
      if (data.error) {
        toast.error( "User not found");
      } else {
        dispatch({
          type: "FETCH_USER_DATA",
          payload: data,
        });
        // console.log(data);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const getUserDetails = async (username) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const data = await fetchGitHubUserData(username);
      if (data.error) {
        toast.error(data.error);
      } else {
        setUserData(data);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }; 

  const SearchData = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      await SearchUserData(username);
      await getUserDetails(username);
      setUsername(''); 
    } else {
      toast.warn("Please enter a username.");
    }
  };

  useEffect(() => {
    SearchUserData(''); 
  }, []);



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

      {!Details ? (
        <Box>
         <Skeleton variant="circular" width={60} height={60} sx={{ marginBottom: "10px" }} />
          <Skeleton variant="text" width="60%" height={30} sx={{ marginTop: "10px" }} />
          <Skeleton variant="text" width="40%" height={20} sx={{ marginTop: "5px" }} />
        </Box>
      ) : (

        <div>
        {
          Details.length === 0 ? (
            <Box>
              <Skeleton variant="circular" width={60} height={60} sx={{ marginBottom: "10px" }} />
              <Skeleton variant="text" width="60%" height={30} sx={{ marginTop: "10px" }} />
              <Skeleton variant="text" width="40%" height={20} sx={{ marginTop: "5px" }} />
            </Box>
          ) : (
            <div style={{display : 'flex' , flexWrap : 'wrap', gap : '10px', alignItems : 'center' , justifyContent : 'center'}} >
            {
              Details?.map((card) => <Cards key={card.id} card={card} />)
            }
            </div>
          )
        }
      </div>

      )}
    </>
  );
};

export default Home;
