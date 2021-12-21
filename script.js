var obj1={name: "Person 1", age:5};
var obj2={age:5, name: "Person 1" };
if(obj1.name==obj2.name){
    console.log("obj names are same");
}
else{
    console.log("obj names are not same");
}
if(obj1.age==obj2.age){
    console.log("obj ages are same");
}
else{
        console.log("obj ages are not same");
}


var request=new XMLHttpRequest();
request.open('get','https://restcountries.com/v3.1/all');
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    for(i=0;i<data.length;i++){
        console.log("country:"+data[i].name.common);
        console.log("region:"+data[i].region);
        console.log("subregion:"+data[i].subregion);
        console.log("population:"+data[i].population);
        console.log(data[i].flags.png);
        
        
        var divindex=document.getElementById("div_index");
        var flagimg=document.createElement("img");
        flagimg.src=data[i].flags.png;
         divindex.append(flagimg);

    }
       
};





