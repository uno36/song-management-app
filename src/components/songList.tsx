import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import { Song } from "../store/sagas";
import {
  fetchSongs as fetchSongsAction,
  deleteSong as deleteSongAction,
  updateSong,
} from "../slices/songsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  SongListContainer,
  Table,
  TableRow,
  TableCell,
  IconWrapper,
  TooltipText,
  EditIconWrapper,
  DeleteIconWrapper,
  EditInput,
  EditButton,
  MultiDeleteButton,
} from "./styles/songList.styles";

export interface SongData {
  _id?: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.songs.songs);

  const [editingSongId, setEditingSongId] = useState<string | null>(null);
  const [editedSongData, setEditedSongData] = useState<SongData>({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });
  const [selectedSongs, setSelectedSongs] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchSongsAction({}));
  }, [dispatch]);

  const handleDelete = async (_id: string) => {
    await dispatch(deleteSongAction(_id));
  };

  const handleMultiDelete = async () => {
    for (const _id of selectedSongs) {
      await dispatch(deleteSongAction(_id));
    }
    setSelectedSongs([]);
  };

  const handleEditClick = (song: Song) => {
    setEditedSongData({
      _id: song._id,
      title: song.title,
      artist: song.artist,
      album: song.album,
      genre: song.genre,
    });
    setEditingSongId(song._id);
  };

  const handleSave = async () => {
    if (editingSongId) {
      const payload = { _id: editingSongId, ...editedSongData };
      console.log("Dispatching updateSongAction with payload:", payload);

      try {
        await dispatch(updateSong(payload));
        setEditingSongId(null);
      } catch (error) {
        console.error("Error saving song:", error);
      }
    } else {
      console.error("Error: No song is being edited.");
    }
  };

  const handleCancel = () => {
    setEditingSongId(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedSongData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleSongSelection = (_id: string) => {
    setSelectedSongs((prevSelected) =>
      prevSelected.includes(_id)
        ? prevSelected.filter((id) => id !== _id)
        : [...prevSelected, _id]
    );
  };

  return (
    <>
      <h1>Song List</h1>
      <MultiDeleteButton
        onClick={handleMultiDelete}
        disabled={selectedSongs.length === 0}
      >
        Delete Selected
      </MultiDeleteButton>
      <SongListContainer>
        {songs.length === 0 ? (
          <p>No songs available</p>
        ) : (
          <Table>
            <thead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Artist</TableCell>
                <TableCell>Album</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </thead>
            <tbody>
              {songs.map((song) =>
                song ? (
                  <TableRow key={song._id}>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={selectedSongs.includes(song._id)}
                        onChange={() => toggleSongSelection(song._id)}
                      />
                    </TableCell>
                    <TableCell>
                      {editingSongId === song._id ? (
                        <EditInput
                          type="text"
                          name="title"
                          value={editedSongData.title}
                          onChange={handleInputChange}
                        />
                      ) : (
                        song.title
                      )}
                    </TableCell>
                    <TableCell>
                      {editingSongId === song._id ? (
                        <EditInput
                          type="text"
                          name="artist"
                          value={editedSongData.artist}
                          onChange={handleInputChange}
                        />
                      ) : (
                        song.artist
                      )}
                    </TableCell>
                    <TableCell>
                      {editingSongId === song._id ? (
                        <EditInput
                          type="text"
                          name="album"
                          value={editedSongData.album}
                          onChange={handleInputChange}
                        />
                      ) : (
                        song.album
                      )}
                    </TableCell>
                    <TableCell>
                      {editingSongId === song._id ? (
                        <EditInput
                          type="text"
                          name="genre"
                          value={editedSongData.genre}
                          onChange={handleInputChange}
                        />
                      ) : (
                        song.genre
                      )}
                    </TableCell>
                    <TableCell>
                      <IconWrapper>
                        {editingSongId === song._id ? (
                          <>
                            <EditButton onClick={handleSave}>
                              <FontAwesomeIcon icon={faSave} />
                              <TooltipText bgColor="green" className="tooltip">
                                Save
                              </TooltipText>
                            </EditButton>
                            <EditButton
                              className="cancel"
                              onClick={handleCancel}
                            >
                              <FontAwesomeIcon icon={faTimes} />
                              <TooltipText bgColor="gray" className="tooltip">
                                Cancel
                              </TooltipText>
                            </EditButton>
                          </>
                        ) : (
                          <>
                            <EditIconWrapper
                              onClick={() => handleEditClick(song)}
                            >
                              <FontAwesomeIcon icon={faEdit} />
                              <TooltipText bgColor="blue" className="tooltip">
                                Edit
                              </TooltipText>
                            </EditIconWrapper>
                            <DeleteIconWrapper
                              onClick={() => handleDelete(song._id)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                              <TooltipText bgColor="red" className="tooltip">
                                Delete
                              </TooltipText>
                            </DeleteIconWrapper>
                          </>
                        )}
                      </IconWrapper>
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow key={Math.random()}>
                    <TableCell colSpan={6}>Invalid song data</TableCell>
                  </TableRow>
                )
              )}
            </tbody>
          </Table>
        )}
      </SongListContainer>
    </>
  );
};

export default SongList;
