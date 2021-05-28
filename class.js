class Car{
  name;
  model;
  price;
  constructor(name, model, price){
    console.log(this);
    this.name = name;
    this.model = model;
    this.price = price;
  }
 age(){
   console.log(this);
   let date = new Date();
   return date.getFullYear() - this.model;
  
 }
}
 let myKia = new Car("Sonet", 1995, 800000);
 console.log(myKia.age());