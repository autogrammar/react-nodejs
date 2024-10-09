import React, { useState, useEffect } from 'react';

function Story() {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    // Fetch stories from backend API
    fetch('/api/story')
      .then(response => response.json())
      .then(data => setStories(data));
  }, []);

  const handleStorySelect = (story) => {
    setSelectedStory(story);
    // TODO: Load selected story into SentenceBuilder
  };

  return (
    <div className="story scrollable">
      <h2>Story</h2>
      <ul>
        {stories.map(story => (
          <li key={story.id} onClick={() => handleStorySelect(story)}>
            {story.title}
          </li>
        ))}
      </ul>
      <button>New Story</button>
    </div>
  );
}

export default Story;