import spotipy  
from spotipy.oauth2 import SpotifyOAuth  
  
# Replace with your Spotify API credentials  
client_id = "a8b11c13c8a24e66873898b65cfccb28"  
client_secret = "4c382d1612dd49f9acd86e81875a3a00"  
redirect_uri = 'http://localhost:5000/callback' 
  
# Set up Spotify API connection  
sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=client_id,  
  client_secret=client_secret,  
  redirect_uri=redirect_uri,  
  scope="playlist_modify"))  
  
# Define the playlist name and description  
playlist_name = "Liked songs"  
playlist_description = "Music from all generes"  
  
# Create a new playlist  
playlist = sp.user_playlist_create(playlist_name, playlist_description)  
  
# Get the playlist ID  
playlist_id = playlist["id"]  
  
# Define the tracks to add to the playlist  
tracks = ["https://open.spotify.com/collection/tracks"]  
  
# Add tracks to the playlist  
sp.playlist_add_items(playlist_id, tracks)  
  
print("Playlist created and tracks added successfully!")
