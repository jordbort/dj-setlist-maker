import { useState } from "react"

export default function AddTrack(props) {
    const { tracks, setTracks } = props

    const [formState, setFormState] = useState({})

    function handleSubmit(e) {
        e.preventDefault()
        if (!formState.trackName || !formState.trackArtist || !formState.bpm || !formState.key) {
            return setFormState({ ...formState, error: `Incomplete form`, help: `Please enter track title, artist, BPM, and key` })
        }
        tracks.push({ name: formState.trackName, artist: formState.trackArtist, key: Number(formState.key), bpm: Number(formState.bpm), inSetList: false })
        e.target.trackName.value = ''
        e.target.trackArtist.value = ''
        e.target.key.value = 6
        e.target.bpm.value = ''
        setFormState({})
        setTracks([...tracks])
    }

    return (
        <>
            <form onChange={(e) => setFormState({ ...formState, [e.target.id]: e.target.value })} onSubmit={handleSubmit}>
                <label htmlFor="trackName">Title </label>
                <input type="text" id="trackName" name="trackName" placeholder='Track name' />

                <label htmlFor="trackArtist">Artist </label>
                <input type="text" id="trackArtist" name="trackArtist" placeholder='Track artist' />

                <label htmlFor="bpm">BPM </label>
                <input type="number" id="bpm" name="bpm" min="1" max="999" placeholder="120" />

                <label htmlFor="key">Key:</label>
                <select id="key" name="key" defaultValue={6}>
                    <option disabled value={6}> -- Choose sharps/flats -- </option>
                    <option value={5}>5 sharps (B maj / G# min, etc.)</option>
                    <option value={4}>4 sharps (E maj / C# min, etc.)</option>
                    <option value={3}>3 sharps (A maj / F# min, etc.)</option>
                    <option value={2}>2 sharps (D maj / B min, etc.)</option>
                    <option value={1}>1 sharp (G maj / E min, etc.)</option>
                    <option value={0}>0 sharps or flats (C maj / A min, etc.)</option>
                    <option value={-1}>1 flat (F maj / D min, etc.)</option>
                    <option value={-2}>2 flats (Bb maj / G min, etc.)</option>
                    <option value={-3}>3 flats (Eb maj / C min, etc.)</option>
                    <option value={-4}>4 flats (Ab maj / F min, etc.)</option>
                    <option value={-5}>5 flats (Db maj / Bb min, etc.)</option>
                    <option value={-6}>6 sharps/flats (F#/Gb maj / D#/Eb min, etc.)</option>
                </select>

                <input type="submit" />
            </form>
            {formState.trackName && formState.trackArtist && formState.bpm && formState.key ? formState.error = '' : null}
            {formState.trackName && formState.trackArtist && formState.bpm && formState.key ? formState.help = '' : null}
            {formState.error ? <p>{formState.error}: {formState.help}</p> : null}
        </>
    )
}
