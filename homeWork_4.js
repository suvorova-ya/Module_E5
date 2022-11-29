class Device {
    constructor(options){
       this.name = options.name;
       this.category = options.category;
       this.power = options.power;
       this.isPlugged = false;
       
    }

    plugIn()
    {
      console.log(this.name + " is plugged!");
      this.isPlugged = true;
    }

    getPowerUsed()
  {
    return this.isPlugged ? this.power : 0;
  }
    
    
   }   
   class Desklamp extends Device {
       constructor(options) {
           super(options)
           this.color = options.color
       }
       getColor() {return this.color;}
       
      }
           
   
   class Сomputer extends Device {
     constructor(options) {
         super(options)
         this.price = options.price;
         this.isPlugged = false;
     }
     getPrice(pr){this.price = pr;}

     static welcome() {   
      console.log('Welcome!');
     }
   }
   
   
   const desklamp = new Desklamp ({
    name: "Xiaomi Philips",
    category: 'lamps',
    power: 13,
    color: 'white',
    price: 1000
      
   })

   const computer = new Сomputer({
    name: "ThinkPad E14",
    category: 'computers',
    power:20,
    price:1000,
    })
   
   console.log(desklamp);
   console.log(computer);
   console.log(desklamp.getPowerUsed() + computer.getPowerUsed());
   console.log(desklamp.getColor());

   desklamp.plugIn();
   computer.plugIn();
  

   
 
  