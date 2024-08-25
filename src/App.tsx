import "./App.css";
import AddSongForm from "./components/addSongForm";
import FilterByGenre from "./components/filterByGenre";
import Navbar from "./components/Navbar";
import SongList from "./components/songList";
import Statistics from "./components/statistics";

function App() {
  return (
    <>
      <Navbar />
      <AddSongForm />
      <FilterByGenre />
      <SongList />
      <Statistics />
    </>
  );
}

export default App;
