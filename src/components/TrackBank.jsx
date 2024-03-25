import Track from './Track'

export default function TrackBank(props) {
    const { trackBank, addToSet, removeFromSet } = props

    return (
        <>
            <h1>All Tracks {`(${trackBank.length})`}</h1>
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
