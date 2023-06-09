import React from "react"
import memesData from "../../public/memesData"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    const [memeText, setMemeText] = React.useState({
        top_txt: '',
        bottom_txt: ''
    })
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    function handleText(event) {
        setMemeText(prev =>({
            ...prev,
            [event.target.name]: event.target.value
    }))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    name="top_txt"
                    onChange={handleText}
                    value={memeText.top_txt}
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    />
                <input
                    name="bottom_txt"
                    onChange={handleText}
                    value={memeText.bottom_txt}
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme--container">
                <h1 className="txt top-txt">{memeText.top_txt || "Type Text"}</h1>
            <img src={meme.randomImage} className="meme--image" />
                <h1 className="txt bottom-txt">{memeText.bottom_txt || "Type Text"}</h1>
            </div>
        </main>
    )
}