import ListOfFruits from "./ListOfFruits";

function  Fruits (){
    const fruits =  [
        {
        name : "apple",color : "red",price : 200,quantity : 10
        },
        {
            name : "banana",color : "yellow",price : 150,quantity : 5
        },
            {
            name : "Orange",color : "orange",price : 300,quantity : 3
        },
    ];

    return (
        <div>
            <ul>
                {fruits.map((fruit) =>
                    (
                       <ListOfFruits key={fruit.name} name={fruit.name} price={fruit.price}
                       color={fruit.color} quantity={fruit.quantity}
                       />
                    ))}
            </ul>
        </div>
    )

}
export default Fruits