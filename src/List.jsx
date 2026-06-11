function List(props) {

    const category = props.category; 
    const itemList = props.items;
                    
    //fruits.sort((a,b) => a.name.localeCompare(b.name));// Sorts the fruits in ascending order based on their names               
    //fruits.sort((a,b) => b.name.localeCompare(a.name));// Sorts the fruits in descending order based on their names
    //fruits.sort((a,b) => a.calories - b.calories);// Sorts the fruits in ascending order based on their calories
    //fruits.sort((a,b) => b.calories - a.calories);// Sorts the fruits in descending order based on their calories

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); // Filters the fruits to include only those with less than 100 calories
    //const highCalFruits = fruits.filter(fruit => fruit.calories > 100); // Filters the fruits to include only those with more than 100 calories
    
    const listItems = itemList.map(item =>  <li key={item.id}>
                                            {item.name}:&nbsp;
                                            <b>{item.calories}</b> </li>);
                                                         

    return( <>
            <h3 className="list-category">{category}</h3>
            <ol className="item-list">{listItems}</ol>
            </>);
}

export default List;
