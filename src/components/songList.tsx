import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import {
  fetchSongs as fetchSongsAction,
  deleteSong as deleteSongAction,
  updateSong as updateSongAction,
  resetUpdateSuccess,
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

const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.songs.songs);
  const updateSuccess = useSelector(
    (state: RootState) => state.songs.updateSuccess
  );

  const [editingSongId, setEditingSongId] = useState<string | null>(null);
  const [editedSongData, setEditedSongData] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });
  const [selectedSongs, setSelectedSongs] = useState<string[]>([]);

  const fetchSongsMemo = useMemo(() => fetchSongsAction({}), []);

  useEffect(() => {
    dispatch(fetchSongsMemo);
  }, [dispatch, fetchSongsMemo]);

  useEffect(() => {
    if (updateSuccess) {
      dispatch(fetchSongsMemo);
      dispatch(resetUpdateSuccess());
    }
  }, [updateSuccess, dispatch, fetchSongsMemo]);

  const handleDelete = async (_id: string) => {
    await dispatch(deleteSongAction(_id));
    dispatch(fetchSongsMemo);
  };

  const handleMultiDelete = async () => {
    for (const id of selectedSongs) {
      await dispatch(deleteSongAction(id));
    }
    setSelectedSongs([]);
    dispatch(fetchSongsMemo);
  };

  const handleEditClick = (song: any) => {
    setEditingSongId(song._id);
    setEditedSongData({
      title: song.title,
      artist: song.artist,
      album: song.album,
      genre: song.genre,
    });
  };

  const handleSave = async () => {
    await dispatch(
      updateSongAction({ _id: editingSongId!, ...editedSongData })
    );
    setEditingSongId(null);
    dispatch(fetchSongsMemo);
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
