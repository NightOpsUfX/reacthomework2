export default function User ({item, showUserPosts}) {

    return(
        <div>
            <p>{item.name}</p>
            <button onClick={() => {
                showUserPosts(item.id)
            }}>
                <span>Show all posts of the user</span>
            </button>
        </div>
    )
}