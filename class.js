// //클래스와 객체
// class Notebook {
//   constructor(name, price, company) {
//     this.name = name;
//     this.price = price;
//     this.company = company;
//   }
// }

// const notebook1 = new Notebook("MacBook", "2000000", "Apple");

// console.log(notebook1);
// console.log(notebook1.name);
// console.log(notebook1.price);
// console.log(notebook1.company);


// //메소드 사용
// class computer {
//   constructor(name, price, year) {
//     this.name = name;
//     this.price = price;
//     this.year = year;
//   }
//   detail() {
//     console.log(`name: ${this.name}, price:${this.price}, year:${this.year}`);
//   }
// }

// const mac = new computer("m1", 3500000, 2021);
// mac.detail();

// //객체 리터럴
// const computer = {
//     name: 'Apple Macbook',
//     price: '200000',
//     printInfo : function () {
//         console.log(`상품명: ${this.name},가격:${this.price}원`)
//     }
// }

// computer.printInfo()

//Quiz
class shop {
    constructor(color, size, price) {
        this.color=color
        this.size=size
        this.price=price
    }
    shopping() {
        console.log(`color: ${this.color}, size: ${this.size}, price: ${this.price}`)
    }  
}

const winter = new shop('blue','XXL',20000)
const spring = new shop('yello','XL',15000)

winter.shopping()
spring.shopping()
