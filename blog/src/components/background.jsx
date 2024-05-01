import React, { useState, useEffect } from 'react';
import CharacterCard from "./CharacterCard";

function Background() {
  return (
    <div className="backgroundContent">
      <img src="https://wallpapers-clan.com/wp-content/uploads/2023/11/one-piece-world-map-desktop-wallpaper-preview.jpg" alt="one piece world map" />
      <div className="content-box">
        <CharacterCard />
      </div>
    </div>
  );
}

export default Background;


