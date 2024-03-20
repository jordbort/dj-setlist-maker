import Track from './Track'

function SetList(props) {
    const { trackList, removeFromSet } = props

    return (
        <>
            <h1>Set List</h1>
            <div className='tracks-container'>
                {trackList.length
                    ? trackList.map((entry, i) => {
                        return entry.inSetList
                            ? <Track key={i} idx={i} data={entry} removeFromSet={removeFromSet} />
                            : null
                    })
                    : `No tracks`}
            </div>
        </>
    )
}

export default SetList
