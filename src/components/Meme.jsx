import React from "react";
import "../CSS/Meme.css"
// import memesdata from "./MemesData"
export default function Meme()
{
    const [meme, setMeme] = React.useState({
        topText : "",
        bottamText : "",
        url : ""
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])
    function handleChange(event)
    {
        setMeme(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])
    console.log(meme)
    function handleonclick()
    {
        
        const randomnum = Math.floor(Math.random() * allMemeImages.length)
        let memeurl = allMemeImages[randomnum].url
        setMeme(prev => ({
            ...prev,
            url : memeurl
        }))
        console.log(meme.url)
    }
    return (
        <main>
            <div className="form" >
                <div className="cont1">
                    <input type="text" placeholder="Top text" className="rect" name = "topText" onChange={handleChange} value={meme.topText} />
                    <input type="text" placeholder="Bottam text" className="rect" name = "bottamText" onChange={handleChange} value={meme.bottamText} />
                </div>
                <button className="button" onClick={handleonclick}>Get a new meme image  🖼</button>
            </div>
            <div className="rect2">
                <img src={meme.url} className="image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottamText}</h2>
            </div>
        </main>
    )
}