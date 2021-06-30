import User from "../User/User";

export default function Users ({items, showUserPosts}) {
    // console.log(items);
    return (
        <div>
            {
                items.map(user => <User key={user.id} showUserPosts={showUserPosts} item={user}/>)
            }
        </div>
    )
}