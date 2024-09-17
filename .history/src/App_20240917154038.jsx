import React, { useState } from "react";

function App() {

  return (
  <>
    <main>
      <h1 className="myheading">My Tunes</h1>
        <div className="main-container">
          <div className="image-section">
            <img src="/images/TaylorSwift.jpeg" alt="Taylor Swift Image" className="taylor-image" />
          </div>
          <div className="myheadingtwo">
            <h2>Taylor Swift's albums</h2>
            <details className="album-section">
              <summary>Lover - 2019</summary>
                <ol>
                  <li>I Forgot That You Existed</li>
                  <li>Cruel Summer</li>
                  <li>Lover</li>
                  <li>The Man</li>
                  <li>The Archer</li>
                </ol>
            </details>
            <details className="album-section">
              <summary>Midnights - 2022</summary>
                <ol>
                  <li>Lavender Haze</li>
                  <li>Maroon</li>
                  <li>Anti-Hero</li>
                  <li>Snow on the Beach</li>
                  <li>You're on Your Own, Kid</li>
                </ol>
            </details>
          </div>
        </div>
    </main>
    
    </>
    

  );

}

export default App