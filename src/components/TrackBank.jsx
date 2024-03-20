import Track from './Track'

function TrackBank(props) {
    const { tracks, addToSet, removeFromSet, resetButton } = props

    return (
        <>
            <h1>All tracks:</h1>
            {tracks.length > 0 && <button onClick={resetButton}>Reset</button>}
            <div className='tracks-container'>
                {tracks.length
                    ? tracks.filter((track) => { return !track.inSetList }).length
                        ? tracks.map((entry, i) => {
                            return entry.inSetList
                                ? null
                                : <Track key={i} idx={i} data={entry} addToSet={addToSet} removeFromSet={removeFromSet} />
                        })
                        : `None left`
                    : `Tracks are empty`}
            </div>
        </>
    )
}

export default TrackBank
