import React from 'react';
import Github from './Github';
import GithubCorner from 'react-github-corner';

const App = () => {
  return (
    <>
      <GithubCorner href="https://github.com/TaylorBeeston/GithubAPITest" />
      <Github />
    </>
  );
};

export default App;
