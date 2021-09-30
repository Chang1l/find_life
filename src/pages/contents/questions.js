const questions = [
  {
    'question': '당신의 성별은?',
    'answers': [
        {
            text: '남자',
            score: 78 //현재 남성 평균 수명 = 78세이므로 78을 기준값으로 가지고 시작
        },
        {
            text: '여자',
            score: 83
        }
    ],
    'weight': 1
},
{
    'question': '당신의 나이대를 입력해주세요',
    'answers': [ //위의 기준값 - 현재 나이의 중간값(10~20 : 15)
        {
            text: '10~20',
            score: -15
        },
        {
            text: '20~30',
            score: -25
        },
        {
            text: '30~40',
            score: -35
        },
        
    ],
    'weight': 1
},
{
    question: "담배를 핀다? 안핀다?",
    answers: [
      {
        text: "핀다",
        score: -10,
      },
      {
        text: "안핀다",
        score: 0,
      },
    ],
    weight: 1,
  },
  {
    question: "운동의 주기",
    answers: [
      {
        text: "매일",
        score: 5,
      },
      {
        text: "주에 3~6.🐾",
        score: 3,
      },
      {
        text: "주에 1~2 🥱",
        score: 1,
      },
      {
        text: "아예 안함 🥱",
        score: -3,
      },
    ],
    weight: 1,
  },
  {
    question: "음주는 얼마나 하나",
    answers: [
      {
        text: "주 0~1회",
        score: 0,
      },
      {
        text: "주 2~3회",
        score: -2,
      },
      {
        text: "매일 마신다",
        score: -6,
      },
    ],
    weight: 1,
  },
  {
    question: "질문1",
    answers: [
      {
        text: "",
        score: 0,
      },
      {
        text: "",
        score: 0,
      },
    ],
    weight: 1,
  },
  {
    question: "질문2",
    answers: [
      {
        text: "",
        score: 0,
      },
      {
        text: "",
        score: 0,
      },
    ],
    weight: 1,
  },
  {
    question: "질문3",
    answers: [
      {
        text: "",
        score: 0,
      },
      {
        text: "",
        score: 0,
      },
    ],
    weight: 1,
  },
  {
    question: "질문4",
    answers: [
      {
        text: "",
        score: 0,
      },
      {
        text: "",
        score: 0,
      },
    ],
    weight: 1,
  },
  {
    question: "질문5",
    answers: [
      {
        text: "",
        score: 0,
      },
      {
        text: "",
        score: 0,
      },
    ],
    weight: 1,
  },
  {
    question: "",
    answers: [
      {
        text: "",
        score: 0,
      },
      {
        text: "",
        score: 0,
      },
    ],
    weight: 0,
  },
];

export default questions;
