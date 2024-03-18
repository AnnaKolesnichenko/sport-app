import Header from 'components/Header/Header';
import './App.scss';
import Item from 'components/Item/Item';
import Reviews from 'components/Reviews/Reviews';

import Favourites from 'components/Favourites/Favourites';
import Contact from 'components/Contact/Contact';
// import Contacts from "./components/Contacts/Contacts";
// import Favourites from './components/Favourites/Favourites';
// import Header from './components/Header/Header';
// import ItemComponent from './components/ItemComponent/ItemComponent';
// import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <p>hello</p>
      <Header />
      <Item />
      <Reviews />
      <Favourites />
      <Contact />
    </div>
  );
}

export default App;
