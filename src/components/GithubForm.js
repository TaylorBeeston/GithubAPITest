import React, { useState } from 'react';

const GithubForm = ({ onSubmit }) => {
  const [userName, setUserName] = useState('');

  const handleNameInput = e => setUserName(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(userName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userName">
        Please enter a Github Username to view information about that User
      </label>
      <div className="search-field">
        <input
          type="text"
          onChange={handleNameInput}
          value={userName}
          name="userName"
        />
        <button>Search</button>
      </div>
    </form>
  );
};

export default GithubForm;
