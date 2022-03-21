// 명언 모음

const quotes = [
{
    quote: "사랑은 서로를 보는 것이 아니라 함께 같은 방향으로 보는 것이다.",
    author: "생텍쥐페리",},

{
    quote: "인생에는 해결책이 없다. 나아가는데 힘이 있다. 계속해서 나아가다 보면 해결책은 따라오게 된다.",
    author: "생텍쥐페리",},

{
    quote: "내일의 진실은, 어제의 실수로부터 얻어진다.",
    author: "생텍쥐페리",},

{
    quote: "다른 사람이 한 일은, 우리도 할 수 있다.",
    author: "생텍쥐페리",},

{
    quote: "자신의 삶을 꿈으로 만들고, 꿈을 현실로 만들어라.",
    author: "생텍쥐페리",},

{
    quote: "중요한 것은 도착하는 것이 아니라 향해가는 것이다.",
    author: "생텍쥐페리",},

{
    quote: "사는 것은 천천히 태어나는 것이다. 다 만들어진 영혼을 빌리는 것은 너무 쉬울 것이다.",
    author: "생텍쥐페리",},

{
    quote: "성공하는 것에 대해서만 신경 쓰지 마라. 중요하게 여기며 노력하다 보면 성공은 자연스럽게 따라온다.", 
    author: "오프라 윈프리",},

{
    quote: "때로는 당신이 원하는 것을 얻지 못하는 것이 멋진 행운이라는 것을 기억하라.",
    author: "달라이 라마",},

{
    quote: "일 년 중 아무것도 할 수 없는 날은 단 두 날이다. 하나는 어제이고 다른 하나는 내일이다. 오늘은 사랑하고 믿고 행동하고 살기에 좋은 날이다.",
    author: "달라이 라마",}
];

const author = document.querySelector("#quote span:first-child");
const quote = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

author.innerText = " < "+todaysQuote.author + " > ";
quote.innerText = todaysQuote.quote;