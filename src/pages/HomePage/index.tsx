import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </div>
  );
}

export default HomePage;
