import css from "./Profile.module.css"
function Profile ({name, tag, location, image, stats}){
    return (
        <div className={css.conteiner}>
  <div className={css.image}>
    <img className={css.avatar}
      src={image}
      alt="User avatar"
    />
    <p className={css.titel}>{name}</p>
    <p className={css.text}>@{tag}</p>
    <p className={css.text}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.line}>
      <span className={css.spanTitel}>Followers</span>
      <span className={css.spanData}>{stats.followers}</span>
    </li>
    <li className={css.line}>
      <span className={css.spanTitel}>Views</span>
      <span className={css.spanData}>{stats.views}</span>
    </li>
    <li className={css.line}>
      <span className={css.spanTitel}>Likes</span>
      <span className={css.spanData}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

export default Profile