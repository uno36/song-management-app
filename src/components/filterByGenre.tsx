import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSongs as fetchSongsAction } from "../slices/songsSlice";
import { FilterContainer, FilterInput } from "./styles/songFilter.styles";

const SongFilter: React.FC = () => {
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();

  const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedGenre = e.target.value;
    setGenre(selectedGenre);
    dispatch(fetchSongsAction({ genre: selectedGenre }));
  };

  return (
    <FilterContainer>
      <h2>Search by Genre</h2>
      <FilterInput
        type="text"
        value={genre}
        onChange={handleGenreChange}
        placeholder="Filter by genre"
      />
    </FilterContainer>
  );
};

export default SongFilter;
