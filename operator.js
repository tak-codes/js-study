// console.log('My' + 'car')
// console.log('1' + 2)
// console.log(1 + 2) // Mycar 12 3

// const shoesPrice = 200000
// console.log('이 신발의 가격은' + shoesPrice + '원입니다') 

// console.log(`이 신발의 가격은 ${shoesPrice}원입니다`) 
// 이 신발의 가격은 2000000원입니다.
// 이 신발의 가격은 2000000원입니다.

// console.log(2 + 1) // 3을 출력
// console.log(2 - 1) // 1을 출력
// console.log(4 / 2) // 2를 출력
// console.log(2 * 3) // 6을 출력
// console.log(10 % 3) // 나머지(remainder) 연산자. 1을 출력
// console.log(10 ** 2) // exponentiation. 10의 2승인 100을 출력


// let count = 1
// const preIncrement = ++count
// // 증감연산자를 앞에 놓게 되면 아래 주석으로 처리한 두 줄의 코드와 같은 내용입니다.
// // 먼저 자기 자신에게 1을 더해서 재할당 한 후, 이를 preIncrement 에 할당했다는 의미입니다.
// // count = count + 1
// // const preIncrement = count
// console.log(`count: ${count}, preIncrement: ${preIncrement}`) // count: 2, preIncrement: 2

// let count = 1
// const postIncrement = count++
// // 증감연산자를 뒤에 놓게 되면 아래 주석으로 처리한 두 줄의 코드와 같은 내용입니다.
// // postIncrement에 자기 자신의 값을 먼저 할당하고, 이후에 1을 더해서 재할당합니다. 
// // const postIncrement = count
// // count = count + 1
// console.log(`count: ${count}, postIncrement: ${postIncrement}`) // count: 2, postIncrement: 1


// const shirtsPrice = 100000
// const pantsPrice = 80000
// let totalPrice = 0

// totalPrice += shirtsPrice // totalPrice = totalPrice + shirtsPrice 와 동일
// console.log(totalPrice)
// totalPrice += pantsPrice // totalPrice = totalPrice + pantsPrice 와 동일 
// console.log(totalPrice)

// totalPrice -= shirtsPrice // totalPrice = totalPrice - shirtsPrice 와 동일
// console.log(totalPrice) 


// console.log(1 < 2) // 1이 2보다 작은가? true
// console.log(2 <= 2) // 2가 2보다 작거나 같은가? true
// console.log(1 > 2) // 1이 2보다 큰가? false
// console.log(1 >= 2) // 1이 2보다 크거나 같은가? false


// let isOnSale = true
// let isDiscountItem = true

// console.log(isOnSale && isDiscountItem) // true && true 이므로 true
// console.log(isOnSale || isDiscountItem) // true || true 이므로 true

// isOnSale = false
// console.log(isOnSale && isDiscountItem) // false && true 이므로 false
// console.log(isOnSale || isDiscountItem) // false || true 이므로 true

// isDiscountItem = false
// console.log(isOnSale && isDiscountItem) // false && false 이므로 false
// console.log(isOnSale || isDiscountItem) // false || false 이므로 false

// console.log(!isOnSale) // !false 이므로 true


// console.log(1 === 1) // true
// console.log(1 === 2) // false
// console.log('Javascript' === 'Javascript') // true
// console.log('Javascript' === 'javascript') // 대소문자나 띄워쓰기도 다 정확히 일치해야 해요. 따라서 false

// // == / === 차이점 알아보기 
// console.log(1 === "1") // false를 출력
// console.log(1 == "1" // true를 출력

// //Quiz 
// const shoesPrice = 200000
// const capPrice = 100000
// const totalPrice = shoesPrice + capPrice

// consoel.log(`총 ${totalPrice * 0.8}원에 물건을 구입합니다.`)

