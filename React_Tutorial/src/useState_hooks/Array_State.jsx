import { useState } from "react";
import intialArtists from "../database/Array_Data";

export default function Array_State() {
  const [artists, setArtists] = useState(intialArtists);

  const handleAddArtist = () => {
    const newArtist = { id: 4, name: "Nijam Uddin Faroki" };
    const addArtist = [...artists, newArtist];
    setArtists(addArtist);
  };

  const handleDelete = (id) => {
    const artistsArray = artists.filter((artist) => artist.id !== id);
    setArtists(artistsArray);
  };

  return (
    <>
      <div>
        <button onClick={handleAddArtist}>Add Another Artist</button>
      </div>
      <div>
        <h1>Artist Name List</h1>
        <ul>
          {artists.map((artist) => (
            <li key={artist.id}>
              {artist.name}
              <button onClick={() => handleDelete(artist.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
