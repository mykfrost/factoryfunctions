// const circle ={
// radius: 1,
// location:{
//     x:1,
//     y:1
// },
// isVisible: true,

// draw: function(){
//     console.log('draw');
// }

// };

// factory Functions

// function createCircle(radius){
//     return  {
//         radius,             
//         draw(){
//            console.log('draw');
//         }
//           };
// }
//  const circle1 = createCircle(1);
// // console.log(circle1);

// // const circle2 = createCircle(2);
// // console.log(circle2);

// //Constructor fucntions
// //When naming constructor fucntions use Pascal Notation
//  function Circle(radius){
//  this.radius = radius;
//  this.draw = function(){
//     console.log('draw');
//     }
//  }

//  const another = new Circle(1);

const circle ={
radius: 1,

draw: function(){
    console.log('draw');
}

};

for (let key in circle){
 //   console.log(key);// this iterattes over properties and methods of an object.
    console.log(key,circle[key]);
}

for (let key of Object.keys(circle))
console.log(key);