import { default as keys } from '../data/keys'

export default function Track(props) {
    const { idx, data, addToSet, removeFromSet } = props
    const { name, artist, key, bpm, inSetList } = data

    return (
        <div className='track' onClick={() => inSetList ? removeFromSet(idx) : addToSet(idx)}>
            <p><strong>{name}</strong></p>
            <p>{artist}</p>
            <ul>
                <li>Key: {keys[key]}</li>
                <li>BPM: {bpm}</li>
            </ul>
        </div>
    )
}
