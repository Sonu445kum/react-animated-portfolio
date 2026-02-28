import axios from "axios";

const GITHUB_USERNAME = "Sonu445kum"; // Replace with your username

const githubAPI = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

// Get GitHub Profile Info
export const getGitHubProfile = async () => {
  try {
    const response = await githubAPI.get(`/users/${GITHUB_USERNAME}`);
    return response.data;
  } catch (error) {
    console.error("GitHub Profile Error:", error);
    throw error;
  }
};

// Get All Repositories
export const getGitHubRepos = async () => {
  try {
    const response = await githubAPI.get(
      `/users/${GITHUB_USERNAME}/repos?per_page=100`
    );

    // Sort by stars (descending)
    const sortedRepos = response.data.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );

    return sortedRepos;
  } catch (error) {
    console.error("GitHub Repo Error:", error);
    throw error;
  }
};

// Get Top 5 Repositories
export const getTopRepos = async () => {
  const repos = await getGitHubRepos();
  return repos.slice(0, 5);
};