import { useState } from "react"

export default function SavedSet(props) {
    const { tracks, setTracks, trackList, setTrackList } = props

    const [saveData, setSaveData] = useState(localStorage.getItem(`trackArtistTitle`) || null)

    function resetTracks() {
        tracks.forEach((track) => { track.inSetList = false })
        setTracks([...tracks])
        setTrackList([])
    }

    function writeMemory() {
        const data = []
        for (const track of trackList) {
            data.push(track.artist)
            data.push(track.name)
        }

        localStorage.setItem(`trackArtistTitle`, data.join())
        setSaveData(data)
    }

    function readMemory() {
        const file = (localStorage.getItem(`trackArtistTitle`) || ``).split(`,`)

        // Reset tracks before building list
        for (const track of tracks) { track.inSetList = false }

        const data = []
        for (const [idx, trackPair] of file.entries()) {
            if (idx % 2 === 0) {
                for (const track of tracks) {
                    if (trackPair === track.artist && file[idx + 1] === track.name) {
                        track.inSetList = true
                        data.push(track)
                    }
                }
            }
        }
        setTrackList([...data])
    }

    function deleteMemory() {
        localStorage.removeItem(`trackArtistTitle`)
        setSaveData(null)
    }

    return (
        <>
            <button onClick={resetTracks}>Reset Tracks</button>
            <button onClick={writeMemory}>Save Set</button>
            {saveData && <button onClick={readMemory}>Load Set</button>}
            {saveData && <button onClick={deleteMemory}>Clear Set</button>}
        </>
    )
}
