const Tags = (props) => {
    const tags = props.tags
    return (
        <>
            <div>
                <h4>Corresponding tags are:</h4>
                {tags.map((tag, index) => <div key={index}><h5>{tag}</h5></div>)}
            </div>
        </>
    )
}
export default Tags