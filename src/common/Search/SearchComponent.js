/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Icon from "@mdi/react";
import { mdiPlayCircle } from "@mdi/js";
import { Link } from "react-router-dom";

export const SearchComponent = ({
    imageUrl,
    search,
    playingSong,
    albumSearch,
    songSearch,
    playSong,
    addSong,
    handleImageError,
    handlePlayAlbum,
}) => {
    // styles
    const albumListStyle = css`
        display: flex;

        & > a {
            color: white;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }

        & .cardItem {
            margin-right: 2%;
            margin-bottom: 2%;
        }
    `;

    const albumCardStyle = css`
        width: 200px;
        height: 300px;
        padding: 1rem;
        margin-right: 2rem;
        border-radius: 2%;
        color: var(--text-color);
        background-color: var(--secondary-color);
        cursor: pointer;

        & > img {
            width: 200px;
        }
        & > div {
            display: flex;
            flex-direction: column;
            & > h1 {
                height: 3em;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 1.4em;
                margin: 0;
            }
            & > div {
                display: flex;
                justify-content: space-between;
                & > p {
                    overflow: hidden;
                    font-size: 1.2em;
                    margin: 0;
                }
                & > svg {
                    width: 2rem;
                    &:hover {
                        opacity: 0.7;
                    }
                }
            }
        }
    `;

    const songListStyle = css`
        list-style-type: none;
        padding: 0;
        margin-right: 2%;

        & > li {
            padding: 0.5em 0;
            height: 60px;
            padding-left: 1%;
            display: grid;
            grid-template-columns: 70px 20fr 4em;
            cursor: pointer;

            &:hover {
                background-color: var(--secondary-color);
            }

            & > div {
                display: flex;
                align-items: center;
            }

            & > .songDetail {
                display: grid;
                grid-template-rows: 1fr 1fr;
            }

            & > .songTitle {
                font-size: 1.2em;
                overflow: hidden;
            }

            & > .album {
                width: 60px;
            }
        }
        & .activeItem {
            background-color: var(--thirtiary-color);
            color: var(--primary-color);
        }
    `;

    // markdown
    const albumList = (albums) => {
        return albums.map((s) => {
            return (
                <Link css={albumCardStyle} to={`/albums/${s._id}`}>
                    <img
                        src={`${imageUrl}${s._id}`}
                        alt="Album Icon"
                        onError={handleImageError}
                    />
                    <div>
                        <h1>{s.albumname}</h1>
                        <div>
                            <p>{s.artist}</p>
                            <Icon
                                path={mdiPlayCircle}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePlayAlbum(s._id);
                                }}
                            />
                        </div>
                    </div>
                </Link>
            );
        });
    };

    const songList = (songs) => {
        return songs.map((s) => {
            return (
                <li
                    key={s.songs._id}
                    onClick={(e) => playSong(s.songs._id)}
                    onContextMenu={(e) => addSong(s.songs._id)}
                    className={playingSong === s.songs._id ? "activeItem" : ""}
                >
                    <img
                        src={`${imageUrl}${s._id}`}
                        alt="album logo"
                        className="album"
                        onError={handleImageError}
                    />
                    <div className="songDetail">
                        <div className="songTitle">{s.songs.title}</div>
                        <div>{s.artist}</div>
                    </div>
                    <div>
                        {(s.songs.duration / 60 < 10 ? "0" : "") +
                            Math.floor(s.songs.duration / 60)}{" "}
                        :{" "}
                        {(s.songs.duration % 60 < 10 ? "0" : "") +
                            (s.songs.duration % 60)}
                    </div>
                </li>
            );
        });
    };

    return (
        <div>
            {search === "" ? (
                <div>Hello</div>
            ) : (
                <div>
                    <h1>Albums</h1>
                    <div css={albumListStyle}>{albumList(albumSearch)}</div>
                    <h1>Songs</h1>
                    <ul css={songListStyle}>{songList(songSearch)}</ul>
                </div>
            )}
        </div>
    );
};