export default function KeyVariance(props) {
    const { handleKeyVarianceChange } = props

    return (
        <form onChange={handleKeyVarianceChange}>
            <label htmlFor="key-variance">Max adjacent keys: </label>
            <select id="key-variance" name="key-variance" defaultValue={3}>
                <option value={5}>5</option>
                <option value={4}>4</option>
                <option value={3}>3</option>
                <option value={2}>2</option>
                <option value={1}>1</option>
                <option value={0}>0 (same key)</option>
            </select>
        </form>
    )
}
