export default function TempoVariance(props) {
    const { tempoVariance, handleTempoVarianceChange, handleTempoVarianceSubmit } = props

    return (
        <>
            {/* <p>Max tempo difference: {tempoVariance}</p> */}
            <form onChange={handleTempoVarianceChange} onSubmit={handleTempoVarianceSubmit}>
                <label htmlFor="tempo">Max tempo difference: </label>
                <input type="number" id="tempo" name="tempo" min="0" max="99" defaultValue={15} />
                {/* <input type="submit" /> */}
            </form>
        </>
    )
}
