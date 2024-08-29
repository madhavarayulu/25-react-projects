import React from 'react';

function GithubUserCard({ user }) {
  const {
    login,
    avatar_url,
    html_url,
    name,
    public_repos,
    followers,
    following,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="card-github-user">
      <img src={avatar_url} alt="user" />
      <a href={html_url} target="_blank">
        {login}
      </a>
      <p className="github-user-data">
        <span>User joined on</span>
        <span>
          {`${createdDate.getDate()} ${createdDate.toLocaleDateString('en-us', {
            month: 'short',
          })} ${createdDate.getFullYear()}`}
        </span>
      </p>
      <p className="github-user-data">
        <span>Public Repos</span>
        <span>{public_repos}</span>
      </p>
      <p className="github-user-data">
        <span>Followers</span>
        <span>{followers}</span>
      </p>
      <p className="github-user-data">
        <span>Following</span>
        <span>{following}</span>
      </p>
    </div>
  );
}

export default GithubUserCard;
