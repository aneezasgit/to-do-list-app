
function Button() {

    let count = 0;
    
    const handleClick = (name, e) => { 
        e.target.textContent = "meow 😼";
        if (count < 3){
            count++;
            console.log(`${name} clicked ${count} time/s`);
        }
        else{
            console.log(`${name} clicked too many times!`);
        }
    };

    

    return(<button className="button1" onClick={(e) => handleClick("Aneeza", e)}> Click me 🌻 </button>);

}

export default Button