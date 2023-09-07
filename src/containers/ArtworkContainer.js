import { useState, useEffect } from "react";


const ArtworkContainer = () => {

    const [artworks, setArtworks] = useState([]);

    const fetchArtworks = async () => {
        const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
        const data = await response.json();
        setArtworks(data);
    }

    useEffect(() => {
        fetchArtworks();
    }, []);

    return(
        <>
        <ArtworkList artworks={artworks}/>
        </>
    )


}

export default ArtworkContainer;