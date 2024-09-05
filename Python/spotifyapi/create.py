import spotipy  
from spotipy.oauth2 import SpotifyOAuth  
import webbrowser  
  
# Spotify API credentials  
SPOTIPY_CLIENT_ID = "a8b11c13c8a24e66873898b65cfccb28"  
SPOTIPY_CLIENT_SECRET = "4c382d1612dd49f9acd86e81875a3a00"   
SPOTIPY_REDIRECT_URI = 'http://localhost:'  
  
# Spotify API scope  
SCOPE = 'user-library-read,playlist-modify-public'  
  
# Create a Spotify OAuth object  
sp_oauth = SpotifyOAuth(client_id=SPOTIPY_CLIENT_ID, client_secret=SPOTIPY_CLIENT_SECRET, redirect_uri=SPOTIPY_REDIRECT_URI, scope=SCOPE)  
  
# Create a Spotify client  
sp_client = spotipy.Spotify(oauth_manager=sp_oauth)  
  
# Get the user's top tracks  
top_tracks = sp_client.current_user_top_tracks(limit=0)  
  
# Create a new playlist  
playlist_name = 'My Automated Playlist'  
playlist_description = 'Automatically generated playlist using Spotify API'  
playlist = sp_client.user_playlist_create(playlist_name, playlist_description)  
  
# Add tracks to the playlist  
for track in top_tracks['items']:  
  track_id = track['track']['id']  
  sp_client.playlist_add_items(playlist['id'], [track_id])  
  
# Open the playlist in the browser  
webbrowser.open(f'https://open.spotify.com/playlist/{playlist["id"]}')

