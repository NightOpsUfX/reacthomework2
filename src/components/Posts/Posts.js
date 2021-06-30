import Post from "../Post/Post";

export default function Posts ({items}) {
    return (
        <div>
            {
                items.map(post => <Post item={post}/>)
            }
        </div>
    )
}