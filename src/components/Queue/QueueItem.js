import { Link } from "react-router-dom";
import ArtistList from "../ArtistList";

const QueueItem = ({ item }) => {
    const getDuration = (duration) => {
        return (
            (duration / 60 < 10 ? "0" : "") +
            Math.floor(duration / 60) +
            ":" +
            (duration % 60 < 10 ? "0" : "") +
            Math.floor(duration % 60)
        );
    };

    return (
        <li className="queue-item">
            <div className="item-title">
                <b>{item.name}</b>
                <ArtistList artists={item.artists} />
            </div>
            <div className="item-album">
                <Link
                    to={`/album/${item.album.id}`}
                    className="link-item"
                    title={item.album.name}
                >
                    {item.album.name}
                </Link>
            </div>
            <div className="text-right">{getDuration(item.duration)}</div>
        </li>
    );
};

export default QueueItem;
