import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "../slices/songsSlice";
import { RootState } from "../store";
import {
  StatisticsContainer,
  Title,
  SubTitle,
  StatsList,
  StatItem,
  StatLabel,
  StatValue,
} from "./styles/statistics.styles";

const Statistics: React.FC = () => {
  const dispatch = useDispatch();
  const stats = useSelector((state: RootState) => state.songs.stats);

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  return (
    <StatisticsContainer>
      <Title>Statistics</Title>
      <SubTitle>
        Total Songs: <StatValue>{stats.totalSongs}</StatValue>
      </SubTitle>
      <SubTitle>
        Total Artists: <StatValue>{stats.totalArtists}</StatValue>
      </SubTitle>
      <SubTitle>
        Total Albums: <StatValue>{stats.totalAlbums}</StatValue>
      </SubTitle>
      <SubTitle>
        Total Genres: <StatValue>{stats.totalGenres}</StatValue>
      </SubTitle>

      <SubTitle>Genres:</SubTitle>
      <StatsList>
        {stats.genreStats &&
          stats.genreStats.map((genreStat) => (
            <StatItem key={genreStat._id}>
              <StatLabel>{genreStat._id}</StatLabel>
              <StatValue>{genreStat.count} song(s)</StatValue>
            </StatItem>
          ))}
      </StatsList>

      <SubTitle>Songs by Artist:</SubTitle>
      <StatsList>
        {stats.artistStats &&
          stats.artistStats.map((artistStat) => (
            <StatItem key={artistStat._id}>
              <StatLabel>{artistStat.artist}</StatLabel>
              <StatValue>
                {artistStat.songCount} song(s), {artistStat.albumCount} album(s)
              </StatValue>
            </StatItem>
          ))}
      </StatsList>
    </StatisticsContainer>
  );
};

export default Statistics;
