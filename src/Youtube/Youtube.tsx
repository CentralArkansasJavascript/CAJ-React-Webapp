import React from "react"
import './Youtube.css'
const YouTube=()=>{

    return <>
    <div className="m-4">

        <div className="youTube">
        <iframe
         width="560" height="349" 
        src="https://www.youtube.com/embed/Llv3kpBaYCI"
        title="Central Arkansas Javascript YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        { ...{"allowFullScreen":true}}
        ></iframe>
        </div>
        <p>Watch the livestream on <a href="https://www.youtube.com/channel/UCs-FJXcXjQJvH69SrdobJ8g/featured">YouTube</a></p>

        </div>
                </>

}

export default YouTube;