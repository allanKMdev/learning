import argparse
import spotipy
from spotipy.oauth2 import SpotifyOAuth

def get_args():
    """Parses command-line arguments."""
    parser = argparse.ArgumentParser(description='Follows a Spotify playlist based on playlist ID')
    parser.add_argument('-p', '--playlist', help='Playlist ID to follow')
    return parser.parse_args()

def main():
    """Main function to follow the specified playlist."""
    args = get_args()

    # Your Spotify credentials
    client_id = "a8b11c13c8a24e66873898b65cfccb28"
    client_secret = "4c382d1612dd49f9acd86e81875a3a00"
    redirect_uri = 'http://localhost:5000/callback'

    # Authenticate with Spotify API
    auth_manager = SpotifyOAuth(client_id=client_id,
                                client_secret=client_secret,
                                redirect_uri=redirect_uri,
                                scope="playlist-modify-public") 

    sp = spotipy.Spotify(auth_manager=auth_manager)

    # Get the playlist ID from command-line argument or use a default
    playlist_id = args.playlist or '37i9dQZEVXbMDoHDwVN2tF'

    try:
        # Follow the playlist
        sp.current_user_follow_playlist(playlist_id)
        print(f"Successfully followed playlist: {playlist_id}")
    except spotipy.exceptions.SpotifyException as e:
        print(f"Error following playlist: {e}")

if __name__ == '__main__':
    main()


