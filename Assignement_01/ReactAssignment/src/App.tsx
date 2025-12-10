import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployeeComponent from './components/ListEmployeeComponent';

const App: React.FC = () => {
 return (
 <div>
  <Header />
  <ListEmployeeComponent />
  <Footer />
 </div>
 );
};
export default App;