/*

Accessing rest countries details from the given JSON file

*/

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function(){

    var data = JSON.parse(this.response)
    //console.log(data)


    for(var i=0; i<data.length; i++){

        //Printing contry flags
        console.log(`Flag of country "${data[i].name.common}" is ${data[i].flags.png}`);

        //Printing contry name
        console.log("Country name is "+data[i].name.common)

        //Printing contry region
        console.log("Country region is "+data[i].region)

        //Printing contry sub region
        console.log("Country sub region is "+data[i].subregion)

        //Printing contry population
        console.log("Country population is "+data[i].population)



    }
}