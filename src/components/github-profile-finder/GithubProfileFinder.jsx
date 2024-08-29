import React, { useEffect, useState } from 'react';
import './github-profile-finder.css';
import GithubUserCard from './GithubUserCard';

function GithubProfileFinder() {
  const [userName, setUserName] = useState('madhavarayulu');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    if (!userName) {
      return;
    }
    setLoading(true);

    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName('');
    }
  }

  useEffect(() => {
    fetchGithubUserData();
    console.log(fetchGithubUserData());
  }, []);

  function handleSubmit() {
    fetchGithubUserData();
  }

  if (loading) {
    return <h3>Fetching User ... </h3>;
  }

  return (
    <div className="container-github-profile">
      <div className="wrapper-input">
        <input
          type="text"
          autoFocus
          placeholder="Search GitHub Username ... "
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>

      {userData !== null ? <GithubUserCard user={userData} /> : null}
    </div>
  );
}

export default GithubProfileFinder;
