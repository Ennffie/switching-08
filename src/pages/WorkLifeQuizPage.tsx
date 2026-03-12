import SliderQuizPage from '../components/SliderQuizPage';

const workLifeQuizData = {
  question: '收工之後，你通常會點樣「充電」？',
  options: [
    {
      emoji: '📚',
      text: '靜靜睇書',
      description: '享受一個人嘅寧靜時光'
    },
    {
      emoji: '🏃',
      text: '做運動',
      description: '用汗水釋放壓力'
    },
    {
      emoji: '👥',
      text: '同朋友聚會',
      description: '同好姊妹/好兄弟傾偈'
    },
    {
      emoji: '🎮',
      text: '打機追劇',
      description: '沉浸喺自己嘅世界'
    }
  ],
  nextRoute: '/quiz/room-cleanliness',
  progress: 25
};

const WorkLifeQuizPage = () => {
  return <SliderQuizPage quizData={workLifeQuizData} />;
};

export default WorkLifeQuizPage;
