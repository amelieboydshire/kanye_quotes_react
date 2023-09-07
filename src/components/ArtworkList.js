import Artwork from "./Artwork";

const ArtworkList = ({artworks}) => {

    const artworkComponents = artworks.map(artwork => {
        return <Artwork
        key={artwork}
        artwork={artwork}
        />
    });

    return(
        <div id="artwork-list">
            {artworkComponents}
        </div>
    )
}

export default ArtworkList;