# A playlist is considered a repeating playlist if any of the songs contain 
# a reference to a previous song in the playlist. 
# Otherwise, the playlist will end with the last song which points to None.

# Implement a function is_repeating_playlist that,
# efficiently with respect to time used, 
# returns true if a playlist is repeating or false if it is not.

class Song:
    def __init__(self, name):
        self.name = name
        self.next = None

    def next_song(self, song):
        self.next = song

    def is_in_repeating_playlist(self):
    

        encountered_songs = set()
        current_song = self


        while current_song:

            if current_song.name in encountered_songs:
                return True

            encountered_songs.add(current_song.name)

            current_song = current_song.next


        return False


first = Song("Hello")
second = Song("Eye of the tiger")

first.next_song(second)
second.next_song(first)

print(first.is_in_repeating_playlist())
