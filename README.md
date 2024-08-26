# Song Management App

A React application with Redux for managing songs, including adding, editing, deleting, and viewing statistics. This project uses Redux for state management and Redux-Saga for handling side effects.

## Features

- **Song List**: View, edit, delete, and select songs.
- **Statistics**: Display aggregate statistics about songs, artists, albums, and genres.
- **Song Filter**: Filter songs by genre.
- **Add Song Form**: Add new songs to the list.

## Project Structure

1. **Components**
   - `SongList.tsx`: Displays and manages a list of songs.
   - `Statistics.tsx`: Shows statistics about songs, artists, albums, and genres.
   - `SongFilter.tsx`: Filters songs based on genre.
   - `AddSongForm.tsx`: Form for adding new songs.

2. **Redux Slice**
   - `songsSlice.ts`: Contains actions, reducers, and state management for songs and statistics.

3. **Redux Store**
   - `store.ts`: Configures the Redux store and integrates with Redux-Saga.

4. **Sagas**
   - `sagas.ts`: Contains side effect logic for fetching data and handling API calls.

## Setup and Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/your-username/song-management-app.git
cd song-management-app
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Running the Application

To start the development server:

```bash
npm run dev
# or
yarn start
```

This will launch the application in your default web browser at `http://localhost:3000`.



## Component Descriptions

### `SongList.tsx`

Displays a list of songs with options to edit, delete, and select songs for batch deletion.

- **State Management**
  - `editingSongId`: Stores the ID of the song currently being edited.
  - `editedSongData`: Stores the data of the song being edited.
  - `selectedSongs`: Array of IDs of selected songs for batch deletion.

- **Actions**
  - `fetchSongs`: Fetches songs from the API.
  - `handleDelete`: Deletes a single song.
  - `handleMultiDelete`: Deletes multiple selected songs.
  - `handleEditClick`: Sets up a song for editing.
  - `handleSave`: Saves edited song data.
  - `handleCancel`: Cancels the edit mode.
  - `handleInputChange`: Updates the state of the edited song.
  - `toggleSongSelection`: Toggles song selection for batch deletion.

### `Statistics.tsx`

Displays various statistics including the total number of songs, artists, albums, and genres, as well as detailed genre and artist statistics.

- **Actions**
  - `fetchStats`: Fetches statistics from the API.

### `SongFilter.tsx`

Allows users to filter the list of songs by genre.

- **State Management**
  - `genre`: Stores the selected genre for filtering.

- **Actions**
  - `handleGenreChange`: Updates the filter and fetches filtered songs from the API.

### `AddSongForm.tsx`

Provides a form to add new songs. Users can add multiple songs at once.

- **State Management**
  - `songs`: Array of song objects being added.

- **Actions**
  - `handleInputChange`: Updates the state of each song.
  - `handleAddAnother`: Adds another song input form.
  - `handleSubmit`: Submits the new songs to the API.

## Redux Slice (`songsSlice.ts`)

Manages the state for songs and statistics, including actions and reducers for fetching, adding, updating, and deleting songs, as well as fetching and setting statistics.

- **Reducers**
  - `fetchSongs`: Initiates fetching of songs.
  - `setSongs`: Sets the fetched songs in the state.
  - `addSongs`: Adds new songs to the state.
  - `updateSong`: Updates an existing song in the state.
  - `deleteSong`: Deletes a song from the state.
  - `setStats`: Sets the statistics data in the state.
  - `createSong`: Adds new songs to the state.
  - `setError`: Sets error messages in the state.
  - `resetDeleteSuccess`: Resets delete success status.
  - `resetUpdateSuccess`: Resets update success status.

## Redux Store (`store.ts`)

Configures the Redux store and integrates Redux-Saga middleware.

- **Middleware**
  - `sagaMiddleware`: Handles side effects using Redux-Saga.

## Sagas (`sagas.ts`)

Handles asynchronous actions related to fetching and updating songs and statistics.

- **Functions**
  - `fetchStats`: Fetches statistics data.
  - `fetchSongs`: Fetches songs based on genre.
  - `createSong`: Creates new songs in the database.
  - `updateSong`: Updates an existing song.
  - `deleteSong`: Deletes a song from the database.
  
## Base ULR

### songs
https://song-api-cmmf.onrender.com/api/songs

### statistics
https://song-api-cmmf.onrender.com/api/songs/stats

## API Endpoints

- **Songs**
  - `GET /api/songs`: Fetch all songs or filter by genre.
  - `POST /api/songs`: Create new songs.
  - `PUT /api/songs`: Update an existing song.
  - `DELETE /api/songs/:id`: Delete a song by ID.

- **Statistics**
  - `GET /api/songs/stats`: Fetch aggregate statistics about songs.

## License

This project is [MIT](LICENSE) licensed.

## Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).
## Contact

For questions or issues, please contact [emmanuelutofa@gmail.com]().

