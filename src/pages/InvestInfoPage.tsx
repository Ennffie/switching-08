import { useNavigate } from 'react-router-dom';
const InvestInfoPage = () => {
  const navigate = useNavigate();
  return <div><button onClick={() => navigate(-1)}>x</button></div>;
};
export default InvestInfoPage;
