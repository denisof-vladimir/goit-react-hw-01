import './Profile.css';

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className="profile-box">
            <div >
            <img src={image} alt="User avatar" width="250" height="250" />
            <h1>{name}</h1>
            <p className="profile-tag">{tag}</p>
            <p className="profile-tag">{location}</p>
            </div>
        
            <ul className="profile-ul">
                <li className="profile-li list">
                    <p>Followers</p>
                    <p>{stats.followers}</p>
                </li>
                <li className="profile-li list">
                    <p>Views</p>
                    <p>{stats.views}</p>
                </li>
                <li className="profile-li list">
                    <p>Likes</p>
                    <p>{stats.likes}</p>
                </li>
            </ul>
        </div>
        
    );
  };


