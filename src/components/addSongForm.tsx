import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSong, fetchSongs } from "../slices/songsSlice";
import {
  FormContainer,
  Input,
  SubmitButton,
  AddAnotherButton,
  SongFormGroup,
} from "./styles/addSongForm.styles";

interface Song {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const AddSongForm: React.FC = () => {
  const dispatch = useDispatch();
  const [songs, setSongs] = useState([
    { title: "", artist: "", album: "", genre: "" },
  ]);

  const handleInputChange = (
    index: number,
    field: keyof Song,
    value: string
  ) => {
    const updatedSongs = [...songs];
    updatedSongs[index] = {
      ...updatedSongs[index],
      [field]: value,
    };
    setSongs(updatedSongs);
  };

  const handleAddAnother = () => {
    setSongs([...songs, { title: "", artist: "", album: "", genre: "" }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validSongs = songs.filter(
      (song) => song.title && song.artist && song.album && song.genre
    );
    if (validSongs.length > 0) {
      dispatch(createSong(validSongs));
    }
    setSongs([{ title: "", artist: "", album: "", genre: "" }]);
    dispatch(fetchSongs({}));
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Add Songs</h2>
      {songs.map((song, index) => (
        <SongFormGroup key={index}>
          <Input
            type="text"
            placeholder="Title"
            value={song.title}
            onChange={(e) => handleInputChange(index, "title", e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Artist"
            value={song.artist}
            onChange={(e) => handleInputChange(index, "artist", e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Album"
            value={song.album}
            onChange={(e) => handleInputChange(index, "album", e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Genre"
            value={song.genre}
            onChange={(e) => handleInputChange(index, "genre", e.target.value)}
            required
          />
        </SongFormGroup>
      ))}
      <AddAnotherButton type="button" onClick={handleAddAnother}>
        Add Another Song
      </AddAnotherButton>
      <SubmitButton type="submit">Submit Songs</SubmitButton>
    </FormContainer>
  );
};

export default AddSongForm;
