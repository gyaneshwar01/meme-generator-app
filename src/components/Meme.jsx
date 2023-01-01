import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState(memesData);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  console.log(allMemes);

  function getMeme() {
    const index = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[index].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <div className="inputs">
          <input
            type="text"
            placeholder="Top text"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
          />
          <input
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button className="btn" onClick={getMeme}>
          Get a new meme image
        </button>
        <div className="meme">
          <img src={meme.randomImage} alt="" className="meme-img" />
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
