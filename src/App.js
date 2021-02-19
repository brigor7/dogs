import React from 'react';
import './App.css';
import PhotoGet from './api/PhotoGet';
import PhotoPost from './api/PhotoPost';
function App() {
  return (
    <div>
      <PhotoPost />
      <PhotoGet />
    </div>
  );
}

export default App;
