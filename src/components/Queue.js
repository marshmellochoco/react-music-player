import Icon from "@mdi/react";
import { useEffect } from "react";
import { mdiClose, mdiShuffle, mdiSync } from "@mdi/js";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { setPlaying, setPlayingTrack } from "../store/player/playerAction";
import { setQueue } from "../store/queue/queueAction";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { setLoop } from "../store/player/playerAction";

const Queue = ({ openQueue, setOpenQueue }) => {
    const location = useLocation();

    useEffect(() => {
        setOpenQueue(false);
        // eslint-disable-next-line
    }, [location]);

    const dispatch = useDispatch();
    const queueData = useSelector((state) => state.queueReducer);
    const { playingTrack, loop } = useSelector((state) => state.playerReducer);

    const handleDragDrop = (result) => {
        if (!result.destination) return;

        const q = [...queueData];
        const [s] = q.splice(result.source.index, 1);
        q.splice(result.destination.index, 0, s);
        dispatch(setQueue(q));
    };

    const setTrack = (trackData) => {
        dispatch(setPlayingTrack(trackData));
        dispatch(setPlaying(true));
    };

    const closeQueue = () => {
        setOpenQueue(false);
    };

    const shuffle = () => {
        let q = [...queueData];
        q.splice(q.indexOf(playingTrack), 1);
        let shuffled = [...q].sort(() => Math.random() - 0.5);
        dispatch(setQueue([playingTrack, ...shuffled]));
    };

    const getQueueList = (queue, playingTrack) => {
        return queue.map((q, i) => {
            const isPlayingTrack = playingTrack._id === q._id;
            return (
                <Draggable key={q._id} draggableId={q._id} index={i}>
                    {(provided, snapshot) => (
                        <div
                            onClick={(e) => {
                                if (e.target.className !== "hover:underline")
                                    setTrack(q);
                            }}
                            id={q._id}
                            className={`${
                                isPlayingTrack
                                    ? "queue-item-active hover:bg-red-200"
                                    : snapshot.isDragging
                                    ? "queue-item-dragging"
                                    : "hover:bg-red-50"
                            }`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            datakey={q._id}
                        >
                            <li className="queue-item">
                                <div className="col-span-6">
                                    <b>{q.title}</b>
                                    <div className="artistList">
                                        {q.artists.map((a) => (
                                            <Link
                                                to={`/artist/${a._id}`}
                                                className="hover:underline linkItem"
                                            >
                                                {a.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <Link
                                    to={`/album/${q.album._id}`}
                                    className="hover:underline col-span-3"
                                >
                                    {q.album.name}
                                </Link>
                                <div className="text-right">
                                    {(q.duration / 60 < 10 ? "0" : "") +
                                        Math.floor(q.duration / 60)}
                                    :
                                    {(q.duration % 60 < 10 ? "0" : "") +
                                        Math.floor(q.duration % 60)}
                                </div>
                            </li>
                        </div>
                    )}
                </Draggable>
            );
        });
    };

    return (
        <>
            {openQueue && (
                <div className="bg-white content mx-2">
                    <div className="flex justify-between items-center">
                        <h1 className="title">Up Next</h1>
                        <div className="flex gap-10">
                            <div className="flex gap-2">
                                <Icon
                                    path={mdiSync}
                                    title="Loop"
                                    className={`icon-small hover:opacity-60 fill-current mx-0.5 sm:mx-2.5 ${
                                        loop ? "text-purple-500" : "text-pink-300"
                                    }`}
                                    onClick={() => dispatch(setLoop(!loop))}
                                />
                                <Icon
                                    path={mdiShuffle}
                                    title="Shuffle"
                                    className={
                                        "icon-small hover:opacity-60 fill-current mx-0.5 sm:mx-2.5 text-pink-300"
                                    }
                                    onClick={shuffle}
                                />
                            </div>
                            <Icon
                                path={mdiClose}
                                title="Close"
                                className="icon-small hover:opacity-60"
                                onClick={closeQueue}
                            />
                        </div>
                    </div>
                    <DragDropContext onDragEnd={handleDragDrop}>
                        <Droppable droppableId="droppable">
                            {(provided) => (
                                <ul
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {getQueueList(queueData, playingTrack)}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            )}
        </>
    );
};

export default Queue;
