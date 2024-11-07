


// export async function fetchGitHubUser(username) {
//     const response = await fetch(`https://api.github.com/users/${username}`);
//     const data = await response.json();
//     return data;
// }

// In Chat-GPT

export const fetchGitHubUser = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
    //   console.log("Fetched Data:", data); // Log the fetched data here
      return data; // Return data to be dispatched
    } catch (error) {
      console.error("Error fetching data:", error);
      return { error: "User not found" }; // In case of error
    }
  };
  