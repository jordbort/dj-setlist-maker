import { useState } from 'react'
import './App.css'
import AllTracks from './components/TrackBank'
import SetList from './components/SetList'
import { database } from './data/database'
import keys from './data/keys'
import KeyVariance from './components/KeyVariance'
import TempoVariance from './components/TempoVariance'
import RelatedTracks from './components/RelatedTracks'
import AddTrack from './components/AddTrack'

function App() {
    const [tracks, setTracks] = useState(database)
    const [trackList, setTrackList] = useState([])

    const [formState, setFormState] = useState({})

    // Set parameter for what is considered a "closely-related" key
    const [keyVariance, setKeyVariance] = useState(3) // maximum is 5, and anything less than 1 will ignore any other keys (except 6 = -6 because F#/Gb)

    function handleKeyVarianceChange(e) {
        // console.log(e.target.id, e.target.value)
        setKeyVariance(e.target.value)
    }

    // Set parameter for what is considered a "closely-related" tempo
    const [tempoVariance, setTempoVariance] = useState(15) // maximum BPM difference between tracks, negative number treated the same as positive

    function handleTempoVarianceChange(e) {
        // console.log(e.target.id, e.target.value)
        setTempoVariance(e.target.value)
    }

    function addToSet(idx) {
        // console.log(`> addToSet()`, idx)
        tracks[idx].inSetList = true
        // console.log(`> addToSet()`, tracks[idx])
        setTracks([...tracks])
        trackList.push(tracks[idx])
    }

    function removeFromSet(idx) {
        // console.log(`> removeFromSet()`, idx)
        trackList[idx].inSetList = false
        // console.log(`> removeFromSet()`, trackList[idx])
        setTracks([...tracks])
        trackList.splice(tracks[idx], 1)
        setTrackList([...trackList])
    }

    function handleChange(e) {
        // console.log(e.target.id, e.target.value)
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // console.log(e.defaultPrevented)
        if (!formState.trackName || !formState.bpm || !formState.key) {
            return setFormState({ ...formState, error: `Incomplete form`, help: `Please enter track name, BPM, and choose a key` })
        }
        // console.log(formState)
        tracks.push({ name: formState.trackName, key: Number(formState.key), bpm: Number(formState.bpm), inSetList: false })
        e.target.trackName.value = ''
        e.target.key.value = 6
        e.target.bpm.value = ''
        setFormState({})
    }

    function handleTempoVarianceSubmit(e) {
        e.preventDefault()
        // console.log(e.defaultPrevented)
        // console.log(e.target.tempo.value)
        handleTempoVarianceSubmit(e.target.tempo.value)
    }

    function resetButton() {
        tracks.forEach((track) => { track.inSetList = false })
        setTracks([...tracks])
        setTrackList([])
    }

    return (
        <>
            {/* <h1>Hello!</h1> */}
            <AddTrack formState={formState} handleChange={handleChange} handleSubmit={handleSubmit} />
            <AllTracks tracks={tracks} setTracks={setTracks} addToSet={addToSet} resetButton={resetButton} />
            <RelatedTracks keyVariance={keyVariance} tempoVariance={tempoVariance} tracks={tracks} trackList={trackList} />
            <KeyVariance keyVariance={keyVariance} handleKeyVarianceChange={handleKeyVarianceChange} />
            <TempoVariance tempoVariance={tempoVariance} handleTempoVarianceChange={handleTempoVarianceChange} handleTempoVarianceSubmit={handleTempoVarianceSubmit} />
            <SetList trackList={trackList} removeFromSet={removeFromSet} />
        </>
    )
}

export default App
