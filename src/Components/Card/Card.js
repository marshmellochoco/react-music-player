// dependancy import
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// component import
import "./Card.css";

export const Card = ({ id, name, artist, handleImageError }) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch();

    const handlePlayAlbum = async (id) => {
        // play the entire album associated with the card, replace the existing queue with the album list
        var songListData = [];
        await axios
            .get(`${apiUrl}/album/${id}`)
            .then((res) => (songListData = res.data.songs))
            .catch((e) => (songListData = []));

        var songList = [];
        songListData.forEach((s) => {
            songList.push(s._id);
        });

        dispatch({ type: "SET_PLAYING_SONG", songId: songList[0] });
        dispatch({ type: "SET_PLAYING", playing: true });
        dispatch({ type: "SET_QUEUE", queue: songList });
    };

    return (
        <Link className="cardItem" to={`/albums/${id}`}>
            <img
                src={`${apiUrl}/album/ico/${id}`}
                alt="Album Icon"
                onError={handleImageError}
            />
            <h1>{name}</h1>
            <div />
            <p>{artist}</p>
            <div
                className="playAlbum"
                onClick={(e) => {
                    e.preventDefault();
                    handlePlayAlbum(id);
                }}
            >
                <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </Link>
    );
};
