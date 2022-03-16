const today = document.querySelector("#today");
const dDay = document.querySelector("#d_day");


//getTodayTime와 setDday는 비슷한 함수지만 다르게 사용.
//getTodayTime  = 노마드코더  바닐라JS 챌린지
//setDday = 구글을 찾아보며  if와 .padStart 대신 삼항 연산자 사용.

function getTodayTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const datee = date.getDate();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    today.innerText = 
    `${year} ${month}/${datee} ${hours}h ${minutes}m ${seconds}s`;
}

function setDday() {
    const setXmas = new Date("2022-12-25T00:00:00");
    const setXmasYear = setXmas.getFullYear();
    const setXmasMonth = setXmas.getMonth()+1;
    const setXmasDate = setXmas.getDate();

    const now = new Date();
    const distance = setXmas.getTime() - now.getTime();
    const day = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds = Math.floor((distance%(1000*60))/1000);
    //백틱 안에서 enter를 제거 하는 방법은 없을까?
    //코드의 직관성을 위해서 코드 안에서는 entet를 하지만 output에서는 안보이게 하고 싶다.
    dDay.innerText = 
    `${setXmasYear} ${setXmasMonth}/${setXmasDate}까지 ` +
    `${day}d ` +
    `${hours < 10 ? `0${hours}` : hours}h ` +
    `${minutes < 10 ? `0${minutes}` : minutes}m ` +
    `${seconds < 10 ? `0${seconds}` : seconds}s`;
}
   
getTodayTime();
setInterval(getTodayTime, 1000);
setDday()
setInterval(setDday, 1000);