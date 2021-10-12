// //배열 선언
// const arr= [1,2,3,4,5]
// console.log(arr)

// //배열 안의 데이터
// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// console.log(rainbowColors[0])
// console.log(rainbowColors[1])
// console.log(rainbowColors[2])
// console.log(rainbowColors[3])
// console.log(rainbowColors[4])
// console.log(rainbowColors[5])
// console.log(rainbowColors[6])

// console.log(rainbowColors.length) // 배열의 길이

// console.log(rainbowColors[rainbowColors.length - 1]) // length 를 응용하여 배열의 마지막 요소도 쉽게 찾아서 출력 가능!


// //배열의 추가와 삭제
// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// rainbowColors.push('ultraviolet') // 배열의 마지막에 ultarviolet 추가
// console.log(rainbowColors) // ultraviolet이 추가된 rainbowColors 출력

// rainbowColors.pop() // 배열의 마지막 요소 ultraviolet을 제거
// console.log(rainbowColors) // ultraviolet이 제거된 rainbowColors 출력

// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// //기본 반복문
// for (let i=0; i < rainbowColors.length; i++) {
//     console.log(rainbowColors[i])
// }

// //for of 문
// for (const color of rainbowColors) {
//     console.log(color)
// }

//Quiz
const priceList = [1000, 2000, 5000, 7000, 10000, 9000, 3000, 15000, 20000, 17000]
let sum = 0

for (price of priceList) {
    sum += price
}

const avg = sum / priceList.length
console.log(`합계: ${sum}, 평균: ${avg}`)