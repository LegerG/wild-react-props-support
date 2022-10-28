import "./Avatar.css";

export function Avatar({ picture_url }) {
  return (
    <div className="avatarWrapper">
      <img className="avatar" src={picture_url} alt="Avatar" />
    </div>
  );
}
