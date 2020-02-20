import React, { useState } from 'react';
import GithubUser from './GithubUser';
import GithubForm from './GithubForm';

const Github = () => {
  const [user, setUser] = useState({});

  const getStats = userName =>
    fetch(`https://api.github.com/users/${userName}`).then(res => res.json());

  const handleSubmit = userName => {
    getStats(userName)
      .then(userInfo => {
        setUser(userInfo);
        console.log(userInfo);
      })
      .catch(err => alert(`Uh-oh! Something went wrong! ${err}`));
  };

  return (
    <div className="github">
      <GithubForm onSubmit={handleSubmit} />
      <GithubUser user={user} />
    </div>
  );
};

export default Github;
