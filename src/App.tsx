import { Route } from 'wouter';
import Home from './pages/Home';
import FibonacciNumber from './pages/FibonacciNumber';

function App() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/fibonacci-number" component={FibonacciNumber} />
    </>
  );
}

export default App;
