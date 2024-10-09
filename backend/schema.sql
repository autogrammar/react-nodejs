CREATE TABLE dictionary (
  id INT AUTO_INCREMENT PRIMARY KEY,
  word VARCHAR(255) NOT NULL,
  parameters JSON
);

CREATE TABLE story (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT
);

CREATE TABLE sentence (
  id INT AUTO_INCREMENT PRIMARY KEY,
  story_id INT,
  content TEXT,
  FOREIGN KEY (story_id) REFERENCES story(id)
);

CREATE TABLE word_declination (
  id INT AUTO_INCREMENT PRIMARY KEY,
  word_id INT,
  declination VARCHAR(255),
  tense VARCHAR(50),
  person VARCHAR(50),
  FOREIGN KEY (word_id) REFERENCES dictionary(id)
);