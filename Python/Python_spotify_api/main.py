import spotipy
from spotipy.oauth2 import SpotifyOAuth

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id="a8b11c13c8a24e66873898b65cfccb28",
                                               client_secret="4c382d1612dd49f9acd86e81875a3a00",
                                               redirect_uri="'http://localhost:5000/callback'",
                                               scope="user-library-read"))


# client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
# sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

def create_playlist(user_id, playlist_name, public=False):
    """Creates a new playlist"""
    playlist = sp.user_playlist_create(user=user_id, name=playlist_name, public=public)
    return playlist['id']

def add_tracks_to_playlist(playlist_id, track_uris):
    """Adds tracks to an existing playlist"""
    sp.playlist_add_items(playlist_id=playlist_id, items=track_uris)

# Define your playlist logic here, e.g.,
def get_new_releases():
    """Gets a list of new releases"""
    new_releases = sp.new_releases()
    tracks = [track['uri'] for item in new_releases['albums']['items'] for track in item['tracks']['items']]
    return tracks

# Example usage
user_id = 'YOUR_USER_ID'
playlist_name = 'New Releases'
playlist_id = create_playlist(user_id, playlist_name)
new_releases_tracks = get_new_releases()
add_tracks_to_playlist(playlist_id, new_releases_tracks)



