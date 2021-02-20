import MainRouter from './router/index';
import store from './store/index';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  
  );
}

export default App;
