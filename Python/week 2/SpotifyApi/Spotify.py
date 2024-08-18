import spotipy
from spotipy.oauth2 import SpotifyOAuth
from flask import Flask, redirect, url_for, session, render_template, request

app = Flask(__name__)

client_id = 'a2a6516859504fb9821a9c249d73bdc3'
client_secret = '96142042d11f4e16bd271888c6dba315'
redirect_uri = 'http://localhost:5000/callback'
scope = 'user-read-private user-read-email user-top-read'

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri, scope=scope))

@app.route('/')
def index():
    if not session.get('token'):
        auth_url = sp.oauth2.authorize_url()
        return redirect(auth_url)
    else:
        token = session.get('token')
        sp.oauth2.set_access_token(token)
        user = sp.current_user()
        return render_template('index.html', user=user)

@app.route('/callback')
def callback():
    code = request.args.get('code')
    token_info = sp.oauth2.get_access_token(code)
    session['token'] = token_info['access_token']
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
