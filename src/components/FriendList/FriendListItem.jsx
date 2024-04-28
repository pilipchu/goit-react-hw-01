import css from "./FriendList.module.css";
function FriendListItem({avatar, name, isOnline}){
    return(
        <div className={css.friend}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.nameFriend}>{name}</p>
  {isOnline?<p className={css.status} style={{color:"green"}}>Online</p>:<p className={css.status} style={{color:"red"}}>Offline</p>}
</div>
    )
}
export default FriendListItem