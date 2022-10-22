const obj1 = {name:"Person1",age:5};
const obj2 = {age:5,name:"Person1"};

//Converting Java script object to JSON object
const x = JSON.stringify(obj1);
const y = JSON.stringify(obj2);

//Comparing 2 JSON objects using lodash library

if(_.isEqual(x, y)){

    console.log("Both JSON have the same properties");

}else{

    console.log("Both JSON doesn't have the same properties");
}

// Javascript object comparision

//Method 2
const a = Object.entries(obj1).sort.toString();
const b = Object.entries(obj2).sort.toString();

if(a==b){

    console.log("Both Javascript object have the same properties");

}else{

    console.log("Both Javascript object doesn't have the same properties");
}

