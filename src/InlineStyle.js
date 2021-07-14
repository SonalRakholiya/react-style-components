export const InlineStyle = () => {
    const buttonStyle = {
        color: 'bule',
        backgroundColor: 'chocolate'
    }
    return (
        <div>
            <h1 className="text-center">CSS Inline Style</h1>
            <button style={buttonStyle}>CSS Style</button>
        </div>
    )
}
