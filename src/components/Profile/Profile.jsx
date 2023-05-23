import PropTypes from 'prop-types';
import sstyle from './Profile.module.css';

export default function Profile(props) {
  const { username, tag, location, avatar, stats } = props;

  return (
    <div className={sstyle.profile}>
      <div className={sstyle.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={sstyle.avatar}
        />
        <p className={sstyle.name}>{username}</p>
        <p className={sstyle.tag}>@{tag}</p>
        <p className={sstyle.location}>{location}</p>
      </div>

      <ul className={sstyle.stats}>
        <li className={sstyle.item}>
          <span className={sstyle.label}>Followers</span>
          <span className={sstyle.quantity}>{stats.followers}</span>
        </li>
        <li className={sstyle.item}>
          <span className={sstyle.label}>Views</span>
          <span className={sstyle.quantity}>{stats.views}</span>
        </li>
        <li className={sstyle.item}>
          <span className={sstyle.label}>Likes</span>
          <span className={sstyle.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};