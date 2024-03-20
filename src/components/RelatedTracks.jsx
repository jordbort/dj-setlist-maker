// import { database } from '../data/database'
import keys from '../data/keys'

function RelatedTracks(props) {
    const { tracks, trackList, keyVariance, tempoVariance } = props
    const currentTrack = trackList[trackList.length - 1]

    const suggestedTracks = []
    if (currentTrack) {
        for (const track of tracks) {
            const { name, key, bpm, inSetList } = track
            if (!inSetList) {
                // LOGIC FOR FINDING CLOSELY-RELATED KEYS
                const closelyRelatedKeys = [key]
                if (Math.abs(key) === 6) { closelyRelatedKeys.push(-key) }
                for (let i = 1; i <= keyVariance; i++) {
                    // console.log(`Checking closely-related keys to`, key, `+/-`, i)
                    const relatedKeyUp = key + i > 6 ? (key + i) - 12 : key + i
                    const relatedKeyDown = key - i < -6 ? (key - i) + 12 : key - i
                    closelyRelatedKeys.push(relatedKeyUp)
                    closelyRelatedKeys.push(relatedKeyDown)
                    if (Math.abs(relatedKeyUp) === 6) { closelyRelatedKeys.push(-relatedKeyUp) }
                    if (Math.abs(relatedKeyDown) === 6) { closelyRelatedKeys.push(-relatedKeyDown) }
                }
                // console.log(name, closelyRelatedKeys.sort((a, b) => { return a - b }))

                // Tracks of closely-related keys, as defined above
                const closelyRelatedKeyTracks = tracks.filter((track) => { return closelyRelatedKeys.includes(track.key) && name !== track.name })

                // Tracks of closely-related tempos, as defined above
                const closelyRelatedTempoTracks = tracks.filter((track) => { return Math.abs(track.bpm - bpm) <= Math.abs(tempoVariance) && name !== track.name })

                const similarTracks = tracks.filter((track) => {
                    return closelyRelatedKeyTracks.includes(track) && closelyRelatedTempoTracks.includes(track) && name !== track.name
                })
                if (similarTracks.includes(currentTrack)) { suggestedTracks.push(track) }
            }
        }
    }

    const relationColors = {
        [-3]: `#e8e8ff`,
        [-2]: `#d1d1ff`,
        [-1]: `#b4b4ff`,
        0: `#a0a0ff`,
        1: `#b4b4ff`,
        2: `#d1d1ff`,
        3: `#e8e8ff`,
    }

    return (
        <>
            <h1>Related Tracks:</h1>
            <p>Current track: {trackList.length ? currentTrack.name : `Select your starting track!`}</p>
            {suggestedTracks.length
                ? <>
                    <p>Recommended tracks of a similar key/tempo:</p>
                    <ul>
                        {suggestedTracks.map((track, i) => {
                            return <li
                                style={{
                                    backgroundColor: relationColors[track.key - currentTrack.key],
                                    fontWeight:
                                        Math.abs(track.bpm - currentTrack.bpm) <= Math.ceil(tempoVariance * .6)
                                            ? `bold`
                                            : `normal`
                                }}
                                key={i}>
                                {track.name} (Key: {keys[track.key]} - BPM: {track.bpm})
                            </li>
                        })}
                    </ul>
                </>
                : <p>No related tracks! :(</p>}
        </>
    )
}

export default RelatedTracks