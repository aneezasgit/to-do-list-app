// import Header from "./Header.jsx";
// import Footer from "./Footer.jsx";
// import Food from "./Food.jsx";
// import Card from "./Card.jsx";
// import Button from "./Button.jsx";
// import Student from "./Student.jsx";
// import UserGreeting from "./UserGreeting.jsx";
// import List from "./List.jsx";
// import Pic from "./Pic.jsx";
// import MyComponent from "./MyComponent.jsx";
// import Counter from "./Counter.jsx";
// import ColourPicker from "./ColourPicker.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {

  // const fruits = [{id: 1, name: "apple", calories: 95},
  //                 {id: 2, name: "banana", calories: 105}, 
  //                 {id: 3, name: "cherry", calories: 50}, 
  //                 {id: 4, name: "date", calories: 110}, 
  //                 {id: 5, name: "elderberry", calories: 60}];
                  
  // const vegetables = [{id: 6, name: "carrot", calories: 41},
  //                     {id: 7, name: "broccoli", calories: 55},
  //                     {id: 8, name: "spinach", calories: 23},
  //                     {id: 9, name: "potato", calories: 77},
  //                     {id: 10, name: "tomato", calories: 22}];                

  return (
    <>
      {/* <Header />
      <Card />
      <Button />
      <Food />
      <Footer />
      <Student name="Ringo" age={25} isStudent={true} />
      <Student name="Paul" age={30} isStudent={false} />
      <Student name="John" age={28} isStudent={true} />
      <Student name="George" age={27} isStudent={false} />
      <UserGreeting isLoggedIn={true} username="meiiville" />   
      {fruits.length > 0 && <List items={fruits} category="Fruits" /> }
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
      <Pic />
      <MyComponent />
      <Counter />
      <ColourPicker /> */}
      <ToDoList />
    </>
  );
}

export default App;
