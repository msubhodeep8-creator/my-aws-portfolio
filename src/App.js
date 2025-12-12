import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <h1>🚀 My AWS Cloud Portfolio</h1>
          <p className="subtitle">Hosted on S3 via GitHub Actions</p>
          <div className="status-badge">System Status: <strong>Online</strong></div>
          <p className="description">
            Hello! This project demonstrates a fully automated CI/CD pipeline. 
            Any changes pushed to GitHub are automatically deployed to AWS S3.
          </p>
          <div className="tech-stack">
            <span>React</span><span>AWS S3</span><span>GitHub Actions</span>
          </div>
        </div>
      </header>
    </div>
  );
}
export default App;