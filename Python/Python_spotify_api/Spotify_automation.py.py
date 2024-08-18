import spotipy 
from spotipy.oauth2 import spotipyOAuth

client_id = "a8b11c13c8a24e66873898b65cfccb28"
client_secret ="4c382d1612dd49f9acd86e81875a3a00"
redirect_url="http://localhost:5000/callback"

sp_OAuth =SpotifyOAuth (client_id,client_secret, redirect_url)
sp_client = spotify.Spotify(oauth_manager =sp_OAuth)


def create_playlist(name, description):  
 playlist = sp_client.user_playlist_create(name, description)  
 return playlist["id"]  
  
def add_tracks_to_playlist(playlist_id, tracks):  
  sp_client.user_playlist_add_tracks(playlist_id,tracks)
  
playlist_id = create_playlist("My Automated Playlist", "A playlist created using Python")  
  
tracks =
["https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC", 
 "https://open.spotify.com/track/3GwzNrlsJxWmFvG9vQxgW4", 
 "https://open.spotify.com/track/1i9RvIBLaPtGcAeDFb19kp"]  
add_tracks_to_playlist(playlist_id,tracks)  

playlist_id = create_playlist("My Automated Playlist", "A playlist created using Python")  
  
