import React from 'react';

function Header() {
  return (
    <header style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <h1>StoryBuilder</h1>
      <div>
        <button>Settings</button>
        <button>Help</button>
        {/* Add more configuration icons as needed */}
      </div>
    </header>
  );
}

export default Header;