import FriendListItem from "./FriendListItem"
import css from "./FriendList.module.css";
function FriendList ({friends}) {
    return (
              <ul className={css.list}>
	{friends.map((friend)=> {return <li className={css.line} key={friend.id}>
        <FriendListItem name={friend.name}
        avatar={friend.avatar}
        isOnline={friend.isOnline}/>
    </li>})}
</ul>
    )    
}
export default FriendList