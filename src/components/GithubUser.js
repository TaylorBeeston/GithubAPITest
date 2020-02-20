import React from 'react';

const GithubUser = ({ user }) => {
  if (Object.entries(user).length === 0 && user.constructor === Object)
    return '';

  if (user.message) return <h3>{user.message}</h3>;

  return (
    <a href={user.html_url} className="github-user">
      <h1 className="username">{user.name}</h1>
      <img src={user.avatar_url} alt={user.name} />
      <span>This user is {user.hireable || 'not '} hirable.</span>
      <span>Public Repos: {user.public_repos}</span>
      <span>Followers: {user.followers}</span>
      <span>Following: {user.following}</span>
    </a>
  );
};

export default GithubUser;
