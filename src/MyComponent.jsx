import React, {useState} from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");
    const [car, setCar] = useState({year:2014 , make:"ford" , model:"mustang" })
    const [food, setFood] = useState(["apple","orange","banana"]);
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");


    const updateName = () => {
        setName("Aneeza");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployment = () => {
        setIsEmployed(!isEmployed);
    }

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }       
    
    function handleCommentChange(e){
        setComment(e.target.value);
    }

    function handlePaymentChange(e){
        setPayment(e.target.value);
    }

    function handleShippingChange(e){
        setShipping(e.target.value);
    }

    function handleYearChange(e) {
        setCar({...car, year: e.target.value});
    }

    function handleMakeChange(e) {
        setCar({...car, make: e.target.value});
    }

    function handleModelChange(e) {
        setCar(c=> ({...c, model: e.target.value}));
    }

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";

        setFood(f => [...f, newFood])

    } 

    function handleRemoveFood(index){
        setFood(food.filter((_,i) => i !== index))

    }

    function handleAddCar() {
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};
        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

    function handleRemoveCar(index) {
        setCars(cars.filter((_,i) => i !== index))
    }

    function handleCarYear(e) {
        setCarYear(e.target.value);

    }

    function handleCarMake(e) {
        setCarMake(e.target.value);
    }

    function handleCarModel(e) {
        setCarModel(e.target.value);

    }

    return (<div>
                <input value={name} onChange={handleNameChange} />
                <p> Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

            
                <p> Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>

                <p> Employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployment}>Toggle status</button>

                <input value={quantity} onChange={handleQuantityChange} type="number" />
                <p> Quantity: {quantity}</p>

                <textarea value={comment} onChange={handleCommentChange}
                placeholder="Enter your comment here" />
                <p> Comment: {comment}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select payment method</option>
                    <option value="credit">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bitcoin">Bitcoin</option>
                </select>    
                <p> Payment: {payment}</p>

                <label> 
                    <input type="radio" value="Pick Up"
                           checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                    pick up
                </label> <br/>
                <label>
                    <input type="radio" value="Delivery"
                           checked={shipping === "Delivery"} onChange={handleShippingChange} />
                    delivery
                </label>   
                <p> Shipping: {shipping}</p> 
                <div>
                    <p> your favourite car is: {car.year} {car.make} {car.model} </p> 
                    <input type="number" value={car.year} onChange={handleYearChange} /> <br />
                    <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
                    <input type="text" value={car.model} onChange={handleModelChange} /> <br />
                </div>
                <h2>
                    list of food
                </h2>
                <ul>
                    {food.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)} > 
                    {food} 
                    </li>)}
                </ul>
                <input type="text" id="foodInput" placeholder="enter food name" />
                <button onClick={(handleAddFood)}>Add food</button>
                <h2> list of car objects</h2>
                <ul>
                    {cars.map((car, index)=>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
                    
                </ul>  
                <input type="number" value={carYear} onChange={handleCarYear} />
                <input type="text" value={carMake} onChange={handleCarMake}   placeholder="enter car make" /> <br />
                <input type="text" value={carModel} onChange={handleCarModel} placeholder="enter car model" /> <br />
                <button onClick={handleAddCar}> add car</button>

        </div>
           
        );
}

export default MyComponent