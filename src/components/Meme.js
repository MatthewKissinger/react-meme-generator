import React from "react"
import { memesData } from "../memesData"

// console.log(memesData.data.memes[0].url)


export default function Meme() {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        let randomNum = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNum].url;

        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        });
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form--input1"
                    placeholder="Top text"
                />
                <input 
                    type="text" 
                    className="form--input2"
                    placeholder="Bottom text"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                > Get a new meme image  🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" alt="meme"/>
        </main>
    )
}