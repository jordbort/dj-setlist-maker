import { useState } from 'react'
import './App.css'
import TrackBank from './components/TrackBank'
import SetList from './components/SetList'
import { database } from './data/database'
import KeyVariance from './components/KeyVariance'
import TempoVariance from './components/TempoVariance'
import RelatedTracks from './components/RelatedTracks'
import AddTrack from './components/AddTrack'
import SavedSet from './components/SavedSet'

export default function App() {
    const [tracks, setTracks] = useState([])
    const [trackList, setTrackList] = useState([])

    const trackBank = tracks.filter(track => !track.inSetList)

    // Set parameter for what is considered a "closely-related" key
    const [keyVariance, setKeyVariance] = useState(3) // maximum is 5, and anything less than 1 will ignore any other keys (except 6 = -6 because F#/Gb)

    // Set parameter for what is considered a "closely-related" tempo
    const [tempoVariance, setTempoVariance] = useState(15) // maximum BPM difference between tracks, negative number treated the same as positive

    function addToSet(idx) {
        trackList.push(tracks[tracks.indexOf(trackBank[idx])])
        tracks[tracks.indexOf(trackBank[idx])].inSetList = true
        setTracks([...tracks])
    }

    function removeFromSet(idx) {
        tracks[tracks.indexOf(trackList[idx])].inSetList = false
        setTracks([...tracks])
        trackList.splice(idx, 1)
    }

    return (
        <>
            <AddTrack tracks={tracks} setTracks={setTracks} />
            <TrackBank trackBank={trackBank} removeFromSet={removeFromSet} addToSet={addToSet} />
            <RelatedTracks tracks={tracks} keyVariance={keyVariance} tempoVariance={tempoVariance} trackList={trackList} />
            <KeyVariance setKeyVariance={setKeyVariance} />
            <TempoVariance setTempoVariance={setTempoVariance} />
            <SetList trackList={trackList} removeFromSet={removeFromSet} />
            <SavedSet tracks={tracks} setTracks={setTracks} trackList={trackList} setTrackList={setTrackList} />
        </>
    )
}
