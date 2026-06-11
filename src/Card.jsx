import profilePic from "./assets/profilepic.jpg";

function Card() {
  return (
    <div className="card">
      <img onClick={() => console.log("Image clicked!")} className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Aneeza</h2>
      <p className="card-description">I study engineering and play guitar</p>
    </div>
  );
}

export default Card;
