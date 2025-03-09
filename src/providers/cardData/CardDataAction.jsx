
export const fetchGitHubUsers = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${username}`);
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error("Error fetching data:", error);
      return { error: "Users not found" };
    }
  };
  

export const fetchGitHubUserData = async (username) => {
    // console.log("Action received username:", username); // Debug log

    if (!username) {
        console.error("Username is missing");
        return { error: 'Username is required' };
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return { error: 'User Not Found' };
    }
}

fetchGitHubUserData("username").then((users) => console.log(users));