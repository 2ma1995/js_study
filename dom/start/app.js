// // const h1 = document.querySelector('h1');
// // h1.textContent = 'Hello World!';
// // h1.className = 'title';
// // h1.style.color = 'white';
// // h1.style.backgroundColor = 'red';
//
// // const input = document.querySelector('input');
// // console.dir(input);
// // const input2 = document.querySelector('input');
// // console.dir(input2);
// // input2.value = 'Some other input the user might have entered';
//
// const h1 = document.getElementById('main-title');
// h1.textContent = 'Some new title!';
// h1.style.color = 'white';
// h1.style.backgroundColor = 'black';
//
// const li = document.querySelector('li:last-of-type');
// li.textContent = li.textContent+' (Changed!) ';
//
// const body = document.body;
//
// // const listItemElements = document.querySelectorAll('li');
// //최신방법.
// const listItemElements = document.getElementsByTagName('li');
// for (const listItemEl of listItemElements) {
//     console.dir(listItemEl);
// }
//
// //자식노드 선택하기
// // const ul = document.querySelector('ul');
// //2번째 list-item선택
// // ul.children
// // ul.children[1]
// //첫번째 자식 선택
// // ul.firstElementChild
// //마지막 자식 선택
// // ul.lastElementChild
// // ul.querySelector('li:last-of-type');
//
// //부모노드 선택하기
// const liFirst = document.querySelector('li');
// // liFirst.parentNode;
// // liFirst.closest('body');
//
// // 형제 노드 선택
// const ul = li.parentElement;
// // const ul = document.querySelector('ul');
// ul.previousSibling // text노드
// ul.nextSibling // 다음 형제 노드에 접근
// ul.nextElementSibling // 다음 형제 노드에 접근(빠르고 쉽게 접근할수있음)

// 활용
// document.body.firstElementChild 여기까지가 header, nextElementSibling가 ul
const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;
console.log(firstLi);

//dom요소 스타일링
const section = document.querySelector('section');
const button = document.querySelector('button');
// section.style.backgroundColor = 'blue';
section.className = 'red-bg';


button.addEventListener('click', () => {
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';
    // } else {
    //     section.className = 'red-bg visible';
    // }
    // section.classList.toggle('visible');
    //
    section.classList.toggle('invisible');
});

//html 요소 추가
// const list = document.querySelector('ul')
// list.innerHTML = list.innerHTML+'<li>Item 4</li>';

//innerHTML 사용시 페이지 전체가 리렌더링된다.
// const div = document.querySelector('div');
// div.innerHTML = div.innerHTML+"<p>Something went wrong!</p>";
// 전체 리렌더링 안시키는 방법(원하는 부분만 리렌더링)
// div.insertAdjacentHTML('beforeend','<p>Something went wrong!</p>');

//createElement() 요소추가
// const list = document.querySelector('ul');
// const newLi = document.createElement('li');
// list.appendChild(newLi);
// newLi.textContent = 'Item 4';
// list.prepend(newLi); // 요소앞에 추가
// list.lastElementChild.before(newLi); // 마지막요소 앞에 추가 (safari에서 사용x)
// list.lastElementChild.after(newLi); // 마지막요소 뒤에 추가 (safari에서 사용x)
// list.firstElementChild.replaceWith(newLi); //원래있던 요소 삭제후, 그자리에 배치
// const secondLi = list.children[1];
// newLi.textContent = 'Item 4';
// secondLi.insertAdjacentElement('afterend', newLi);// 모든브라우저에 적용가능

//dom 노드 복제
// const newLi2 = newLi.cloneNode(true);
// list.append(newLi,newLi2);

//라이브 노드 리스트 , 정적 노드 리스트
// listItem : 정적 노드 리스트 , 요소가 추가되고 선언한시점으로 저장이되어, 추가한요소는 안보임.
// listItem2 : 라이브 노드 리스트 , 요소가 추가되고 다 반영시킴.(getElementBy~~로 시작하는건 다 라이브리스트.)
// const listItems = list.querySelectorAll('li');
// const listItem2 = list.getElementsByTagName('li');
// const newLi = document.createElement('li');
// newLi.textContent = 'Item 4';
// list.append(newLi);

//요소제거
// const list = document.querySelector('ul');
// list.remove();
// list.parentElement.removeChild(list);

//요약

// 모든브라우저에서 사용가능한 메서드
// appendChild()
// insertAdjacentElement()
// replaceChild()
// removeChild()

// 제한된 브라우저들만 사용가능
// append()
// prepend()
// before()
// after()
// replaceWith()
// remove()