import Tags from "./Tags";

const Nav = (props) => {
    return (<>
        <div className="availablePost">
            <h1>Available posts</h1>
            {props.posts.map((item, index) => <div key={index}>
                <h3>{item.title}</h3>
                <h3>{item.body}</h3>
                <Tags tags={item.tags}/>
            </div>)}
        </div>
    </>);
}
export default Nav;