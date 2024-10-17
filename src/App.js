import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Form from "react-bootstrap/Form";
import { APP_PAGE_URL, BONUS_DATA, GIFT_DATA } from './constants';

function App() {
  const [isViewingGiftCards, setIsViewingGiftCards] = useState();
  const currentCardsData = isViewingGiftCards ? GIFT_DATA : BONUS_DATA;

  const onToggleBtnChange = (e) => setIsViewingGiftCards(e.target.checked); 

  const goToAppPage = () => window.open(APP_PAGE_URL, '_blank');

  const renderMessage = () => (
    <div className="app-sub-header">
      <h1>San Dollars</h1>
      <p>
        Pay now, eat more later! Earn a bonus when you buy food upfront. Tap now
        to purchase.
      </p>
    </div>
  );

  const renderToggle = () => (
    <div className="flex-center">
      <div className="toggle-wrapper">
        <div>Purchase as gift</div>
        <Form>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            checked={isViewingGiftCards}
            onChange={onToggleBtnChange}
          />
        </Form>
      </div>
    </div>
  );

  const renderCards = () => (
    <div className="cards-grid">
      {
        currentCardsData.map((cardData) => <Card data={cardData} onCardClick={goToAppPage} />)
      }
    </div>
  );

  return (
    <div className="App">
      <Header goToAppPage={goToAppPage} />
      <main className="flex-auto">
        {renderMessage()}
        {renderToggle()}
        {renderCards()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
