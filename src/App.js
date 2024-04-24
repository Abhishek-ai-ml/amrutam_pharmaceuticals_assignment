import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Info from './components/Info';
import DiscoverAyurveda from './components/DiscoverAyurveda';
import BookConsultation from './components/BookConsultation';
import ApproachSection from './components/ApproachSection';
import AppInfo from './components/AppInfo';
import HeroBanner from './components/HeroBanner';
import AyurvedicConsultation from './components/AyurvedicConsultation';
import ValuedCustomers from './components/ValuedCustomers';
import AyurvedaExperts from './components/AyurvedaExperts';

function App() {
  return (
    <div className='w-full overflow-hidden fontStyle'>

      <div className='w-full'><Navbar/></div>

      <div className=''><HeroBanner/></div>

      <Info/>

      <DiscoverAyurveda/>

      <AyurvedicConsultation/>

      <BookConsultation/>

      <ApproachSection/>

      <ValuedCustomers/>

      <AyurvedaExperts/>

      <AppInfo/>

      <Footer/>
    </div>
  );
}

export default App;
