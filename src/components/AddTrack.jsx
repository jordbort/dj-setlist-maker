import { useState } from "react"

function AddTrack(props) {
    // console.log(`AddTrack props:`, props)
    const { formState, handleChange, handleSubmit } = props

    return (
        <>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <label htmlFor="trackName">Track ID </label>
                <input type="text" id="trackName" name="trackName" placeholder='Artist - "Track Name"' />

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
            {formState.trackName && formState.bpm && formState.key ? formState.error = '' : null}
            {formState.trackName && formState.bpm && formState.key ? formState.help = '' : null}
            {formState.error ? <p>{formState.error}: {formState.help}</p> : null}
        </>
    )
}

export default AddTrack
