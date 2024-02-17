var make_album = function (artist_name, album_title, tracks) {
    var makeAlbum = {
        artist_name: artist_name,
        album_title: album_title,
        tracks: tracks
    };
    return makeAlbum;
};
console.log(make_album('The Midnight Serenade', 'Serenade Under the Stars', 3));
console.log(make_album('Dreaming Harmonies', "Harmony's Journey", 4));
