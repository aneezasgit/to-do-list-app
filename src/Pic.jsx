function Pic(){

    const imageUrl = './src/assets/profilepic.jpg';
    
    const handleClick = (e) => e.target.style.border = "5px solid red";

    return (<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}

export default Pic;