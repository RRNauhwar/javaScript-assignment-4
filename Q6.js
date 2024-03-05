function createPlaylist (playlistName) {
    const playlist = {
        name: playlistName,
        songs:[]
    }
    return {
        addSongs: function (songName,artist) {
            const newSong = {name :songName,artist:artist}
            playlist.songs.push(newSong)
            console.log(`${songName} by ${artist} added to ${playlistName}`)
        },
        listSongs: function () {
            console.log(`Songs in ${playlistName}: `)
            playlist.songs.forEach((song,index)=>{
                console.log(`${index+1}. ${song.name} - ${song.artist} `)
            })
        }
    }
}
const myPlaylist = createPlaylist("My Playlist")
myPlaylist.addSongs("Jeena Jeena","Atif Aslam")
myPlaylist.addSongs("HUSN","Anuv Jain")
myPlaylist.listSongs()