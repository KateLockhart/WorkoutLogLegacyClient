import './App.css';
import SiteBar from './home/Navbar';
import Auth from './components/authFunctionality/Auth';


const App: React.FunctionComponent = () => {
  

  return (
    <div className="App">
      <SiteBar/>
      <Auth/>
    </div>
  );
}

export default App;
