import { BrowserRouter } from 'react-router-dom';

import Paths from './routes/index.routes';
import Contexts from './contexts';

import './assets/css/global.css';

function App() {
  return (
    <BrowserRouter>
      <Contexts>
        <Paths />
      </Contexts>
    </BrowserRouter>
  );
}

export default App;
