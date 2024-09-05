import spotipy
from spotipy.oauth2 import SpotifyOAuth

scope = "user-library-read"

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(scope=scope))

results = sp.current_user_saved_tracks()
for idx, item in enumerate(results['items']):
    track = item['track']
    print(idx, track['artists'][0]['name'], " – ", track['name'])


# from songs import Songs
# from spotifyapp import Spotify

# #Scrap the songs website to get the titles
# songs = Songs()
# title_details = songs.scrap_songs()

# #Create spotify object and authenticate to generate the token and then create playlist
# sp = Spotify()
# sp.authenticate_spotify()
# sp.spotify_create_play_list(title_details['title_text_list'], title_details['year'])
