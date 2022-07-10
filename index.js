const circle ={
radius: 1,
location:{
    x:1,
    y:1
},
isVisible: true,

draw: function(){
    console.log('draw');
}

};

// factory Functions

function createCircle(radius){
    return  {
        radius,
             
        draw(){
            console.log('draw');
        }
        
        };
}

const circle1 = createCircle(1);
console.log(circle1);