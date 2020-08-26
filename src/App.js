import React from 'react';
import './App.css';

import Form from './components/Form';
import List from './components/List';
import Post from './components/Posts';

const App = () => {
  return (
    <div>
      <h2>Articles</h2>
      <Form />
      <List />
      <h2>API Posts</h2>
      <Post />
    </div>
  );
}

export default App;
