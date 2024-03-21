import Track from './Track'

export default function SetList(props) {
    const { trackList, removeFromSet } = props

    return (
        <>
            <h1>Set List</h1>
            <div className='tracks-container'>
                {trackList.length
                    ? trackList.map((track, idx) => {
                        return track.inSetList
                            ? <Track key={idx} idx={idx} data={track} removeFromSet={removeFromSet} />
                            : null
                    })
                    : `No tracks`}
            </div>
        </>
    )
}
