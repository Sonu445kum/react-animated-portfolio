import { useEffect, useState } from "react";
import axios from "axios";

const GitHubStats = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/YOUR_USERNAME")
      .then((res) => setData(res.data));
  }, []);

  if (!data) return null;

  return (
    <section className="py-24 bg-black text-center">
      <h2 className="text-4xl font-bold mb-6">GitHub Stats</h2>
      <p>Repos: {data.public_repos}</p>
      <p>Followers: {data.followers}</p>
    </section>
  );
};

export default GitHubStats;