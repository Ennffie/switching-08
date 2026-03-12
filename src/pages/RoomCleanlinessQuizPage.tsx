import SliderQuizPage from '../components/SliderQuizPage';

const roomCleanlinessQuizData = {
  question: '你嘅房間整潔程度係：',
  options: [
    {
      emoji: '🌪️',
      text: '好似被炸彈炸過',
      description: '尋嘢都要花半個鐘'
    },
    {
      emoji: '📦',
      text: '亂中有序',
      description: '自己知自己嘢擺喺邊'
    },
    {
      emoji: '✨',
      text: '乾淨企理',
      description: '每樣嘢都有佢嘅位置'
    },
    {
      emoji: '🏆',
      text: '五星級酒店咁乾淨',
      description: '連塵都冇一粒'
    }
  ],
  nextRoute: '/quiz/result',
  progress: 50
};

const RoomCleanlinessQuizPage = () => {
  return <SliderQuizPage quizData={roomCleanlinessQuizData} />;
};

export default RoomCleanlinessQuizPage;
