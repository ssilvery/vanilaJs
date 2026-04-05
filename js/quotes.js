const quotes = [
  {
    quote: "좋은 말을 할 수 없다면 아무것도 말하지 않는 편이 나을거야.",
    quoteEn: "If you can't say something nice, don't say anything at all.",
    author: "밤비",
    authorEn: "Bambi"
  },
  {
    quote: "온실 속을 벗어나 모험을 해봐. 그만한 가치가 있어.",
    quoteEn: "Venture outside your comfort zone. The rewards are worth it.",
    author: "라푼젤",
    authorEn: "Rapunzel"
  },
  {
    quote: "평범한 모습에 속지말아. 많은 것들이 그렇듯 겉모습이 아니라 내면이 중요하거든.",
    quoteEn: "Do not be fooled by its commonplace appearance. Like so many things, it is not what is outside, but what is inside that counts.",
    author: "알라딘",
    authorEn: "Aladdin"
  },
  {
    quote: "자유가 없다면 행복한 사람이 있을까?",
    quoteEn: "Can anybody be happy if they aren't free?",
    author: "미녀와 야수",
    authorEn: "Beauty and the Beast"
  },
  {
    quote: "만약 우리가 그 꿈을 추구하는 용기를 가지고 있다면, 모든 꿈은 이뤄질 수 있어.",
    quoteEn: "All our dreams can come true, if we have the courage to pursue them.",
    author: "월트 디즈니",
    authorEn: "Walt Disney"
  },
  {
    quote: "과거는 당신의 머리 속에 있고, 미래는 당신의 손에 있어요.",
    quoteEn: "The past is in your head, The future is in your hands.",
    author: "피글렛",
    authorEn: "Piglet"
  },
  {
    quote: "당신이 할 수 있다고 믿는다면, 당신은 그렇게 될 거예요.",
    quoteEn: "Believe you can, then you will.",
    author: "라푼젤",
    authorEn: "Rapunzel"
  },
  {
    quote: "매일 행복할 순 없지만, 행복한 것들은 매일 있어.",
    quoteEn: "You can't be happy every day, but there are happy things every day.",
    author: "곰돌이 푸",
    authorEn: "Pooh"
  },
  {
    quote: "문제는 문제가 아니야. 문제는 문제를 바라보는 너의 태도야.",
    quoteEn: "The problem is not the problem. The problem is your attitude about the problem.",
    author: "캐리비안의 해적",
    authorEn: "Pirates of the Caribbean"
  },
]

const quote = document.querySelector("#quote h4:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = Math.floor(Math.random() * (quotes.length - 1));

console.log(quotes[todaysQuote].quote);

quote.innerText = quotes[todaysQuote].quote;
author.innerText = quotes[todaysQuote].author;
