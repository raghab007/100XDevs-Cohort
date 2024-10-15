

// Classes and objects in javascript
class Animal {
    constructor(name,age,color){
        this.name = name;
        this.age = age;
        this.color = color;
    
    }

     sound() {
        console.log(`Animal ${this.name} is speaing`)
    }

    eat(){
        console.log(`${this.name} animal is eating`)
    }
}


class Dog extends Animal{
    constructor(name,age,color){
        super(name,age,color)
    }
    
    sound(){
        super.sound();
    }

    eat(){
        super.eat();
    }
}

const dog1 = new Dog("Rocey",5,'White');
dog1.eat()
dog1.sound()