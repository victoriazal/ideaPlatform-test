import Ticket from "../../Ticket/Ticket";
import Filter from "../../Filter/Filter";
import ticketsData from "../../../constants/tickets.json";
import planeAnimation from "../../../assets/plane.json";
import "./BuyTicket.scss";
import LottieAnimation from "../../elements/Lottie/Lottie";
import { useEffect, useState } from "react";


const BuyTicket = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [currency, setCurrency] = useState('RUB');
  const [stops, setStops] = useState<number[]>([]);
  const [filteredTickets, setFilteredTickets] = useState(ticketsData.tickets);

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  const handleStopsChange = (newStops: number[]) => {
    setStops(newStops);
  };

  useEffect(() => {
    const rate = currency === 'RUB' ? 1 : currency === 'USD' ? 0.01 : 0.0095;
    const filtered = ticketsData.tickets
      .filter(ticket => stops.length === 0 || stops.includes(ticket.stops))
      .map(ticket => ({
        ...ticket,
        price: Math.round(ticket.price * rate),
      }));
    setFilteredTickets(filtered);
  }, [stops, currency]);

  return (
    <div className="buy-ticket_wrapper">
      {!animationComplete && (
        <LottieAnimation
          animationData={planeAnimation}
          loop={false}
          onComplete={() => setAnimationComplete(true)}
        />
      )}
      {animationComplete && (
        <>
          <Filter 
            onCurrencyChange={handleCurrencyChange} 
            onStopsChange={handleStopsChange} 
          />
          <div className="buy-ticket_tickets">
            {filteredTickets.map((ticket, index) => (
              <Ticket
                key={index}
                currentCurrency={currency}
                origin={ticket.origin}
                origin_name={ticket.origin_name}
                destination={ticket.destination}
                destination_name={ticket.destination_name}
                departure_date={ticket.departure_date}
                departure_time={ticket.departure_time}
                arrival_date={ticket.arrival_date}
                arrival_time={ticket.arrival_time}
                carrier={ticket.carrier}
                stops={ticket.stops}
                price={ticket.price}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BuyTicket;