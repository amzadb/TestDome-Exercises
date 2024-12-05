class Song {
    track: number;
    seconds: number;

    constructor(track: number, seconds: number) {
        this.track = track;
        this.seconds = seconds;
    }
}

class Album {
    songs: Song[];
 
    constructor(songs: Song[]) {
      this.songs = songs;
    }
 
    getValue(property: keyof Song | "songs"): any {
        if (property === "songs") {
            return this.songs;
        }

        // Example: Returning the property of the first song for demonstration
        return this.songs.map((song) => song[property]);
    }
}

// Example Usage:
const song1 = new Song(1, 300);
const song2 = new Song(2, 240);
const album = new Album([song1, song2]);

console.log(album.getValue("songs")); 
// Output: [ Song { track: 1, seconds: 300 }, Song { track: 2, seconds: 240 } ]
console.log(album.getValue("track")); 
// Output: [ 1, 2 ]
console.log(album.getValue("seconds")); 
// Output: [ 300, 240 ]