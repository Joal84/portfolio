import React from "react";

const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

export default function Spotify() {
  return (
    <div>
      <iframe
        src="https://open.spotify.com/embed/playlist/0btW89B09KGTjqgqpnLI6H?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify player"
      ></iframe>
    </div>
  );
}
