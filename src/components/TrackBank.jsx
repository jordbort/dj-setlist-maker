import Track from './Track'

export default function TrackBank(props) {
    const { trackBank, addToSet, removeFromSet, resetButton } = props

    return (
        <>
            <h1>All Tracks {`(${trackBank.length})`}</h1>
            {trackBank.length > 0 && <button onClick={resetButton}>Reset</button>}
            <div className='tracks-container'>
                {trackBank.length
                    ? trackBank.map((entry, idx) => {
                        return entry.inSetList
                            ? null
                            : <Track key={idx} idx={idx} data={entry} addToSet={addToSet} removeFromSet={removeFromSet} />
                    })
                    : `Tracks are empty`}
            </div>
        </>
    )
}
