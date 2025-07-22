// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers =  Array(5,2); // []
// console.log(moreNumbers);
//
// const yetMoreNumbers = Array.of(1,2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);
//
// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);
//
// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];
//
// const analyticsData = [[1, 1.6], [-5.4, 2.1]];
// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding'); // 맨앞에 요소 추가
// const poppedValue = hobbies.pop();
// hobbies.shift(); // 맨 앞의 요소 제거
// console.log(hobbies);
//
// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading';
// console.log(hobbies, hobbies[4]);
//
// //splice함수 = splice(시작하는 인덱스, 시작하는 인덱스부터 지우고싶은 갯수, 배열에 추가할 요소)
// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);
// // 음수를 설정시 맨뒤로간다.
// const removedElements = hobbies.splice(-1, 1);
// console.log(hobbies);

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
//slice(시작하는 인덱스, 끝나는 인덱스) 배열에서 원하는 부분을 잘라서 새로운 배열을 만들어줌
//끝나는 인덱스까지 복사가 아니라 전의 인덱스까지만 복사된다. 음수(마지막부터-1)는 음수끼리만 적어줘야된다.
const storedResults = testResults.slice(-3, -1);
testResults.push(5.91);
console.log(storedResults,testResults);