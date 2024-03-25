export default function TempoVariance(props) {
    const { setTempoVariance } = props

    function handleSubmit(e) {
        e.preventDefault()
        setTempoVariance(e.target.tempo.value)
    }

    return (
        <>
            <form onChange={(e) => setTempoVariance(e.target.value)} onSubmit={handleSubmit}>
                <label htmlFor="tempo">Max tempo difference: </label>
                <input type="number" id="tempo" name="tempo" min="0" max="99" defaultValue={15} />
            </form>
        </>
    )
}
