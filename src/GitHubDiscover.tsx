import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardActions, Button, Chip, Box, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import { Star, Bookmark } from '@mui/icons-material';

const theme = createTheme();

// Placeholder data
const trendingRepos = [
    { name: 'react', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.', stars: 178000, language: 'JavaScript' },
    { name: 'vue', description: 'Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.', stars: 189000, language: 'JavaScript' },
    { name: 'tensorflow', description: 'An Open Source Machine Learning Framework for Everyone', stars: 156000, language: 'Python' },
];

const developers = [
    { name: 'John Doe', username: 'johndoe', avatar: '/placeholder.svg?height=40&width=40' },
    { name: 'Jane Smith', username: 'janesmith', avatar: '/placeholder.svg?height=40&width=40' },
    { name: 'Bob Johnson', username: 'bobjohnson', avatar: '/placeholder.svg?height=40&width=40' },
];


const DeveloperList = () => (
    <List>
      {developers.map((dev) => (
        <ListItem key={dev.username}>
          <ListItemAvatar>
            <Avatar src={dev.avatar} alt={dev.name} />
          </ListItemAvatar>
          <ListItemText primary={dev.name} secondary={`@${dev.username}`} />
          <Button variant="outlined" size="small">
            Follow
          </Button>
        </ListItem>
      ))}
    </List>
  );

const TrendingRepos = () => (
    <Grid container spacing={3}>
      {trendingRepos.map((repo) => (
        <Grid item xs={12} sm={6} md={4} key={repo.name}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                {repo.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {repo.description}
              </Typography>
              <Box mt={2} display="flex" alignItems="center" justifyContent="space-between">
                <Chip icon={<Star />} label={repo.stars} size="small" />
                <Typography variant="body2" color="text.secondary">
                  {repo.language}
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button size="small" startIcon={<Star />}>
                Star
              </Button>
              <Button size="small" startIcon={<Bookmark />}>
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );


const Header = () => (
  <AppBar position="static" color="default" elevation={0}>
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        GitHub Discover
      </Typography>
    </Toolbar>
  </AppBar>
);



export default function GitHubDiscover() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="min-h-screen bg-gray-100">
          <Header />
          <Container maxWidth="lg" sx={{ py: 8 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Typography variant="h4" component="h2" gutterBottom>
                  Trending Repositories
                </Typography>
                <TrendingRepos />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h4" component="h2" gutterBottom>
                  Developers to Follow
                </Typography>
                <Card>
                  <CardContent>
                    <DeveloperList />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
          <Box component="footer" bgcolor="background.paper" py={6}>
            <Container maxWidth="lg">
              <Typography variant="body2" color="text.secondary" align="center">
                © 2023 GitHub Discover Clone. This is a demo project.
              </Typography>
            </Container>
          </Box>
        </div>
      </ThemeProvider>
    );
  }