// import { useState } from 'react'
// import { database } from '../data/database'
import { default as keys } from '../data/keys'

function Track(props) {
    const { idx, data, addToSet, removeFromSet } = props
    const { name, key, bpm, inSetList } = data

    return (
        <div className='track' onClick={() => inSetList ? removeFromSet(idx) : addToSet(idx)}>
            <p><strong>{name}</strong></p>
            <ul>
                <li>Key: {keys[key]}</li>
                <li>BPM: {bpm}</li>
            </ul>
        </div>
    )
}

export default Track
