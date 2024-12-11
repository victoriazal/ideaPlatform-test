import './Ticket.scss';
import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';
import TK from '../../assets/images/TK.png';
import SU from '../../assets/images/SU.png';
import S7 from '../../assets/images/S7.png';
import BA from '../../assets/images/BA.png';
interface TicketProps {
  currentCurrency: string;
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

const Ticket: React.FC<TicketProps> = ({
  currentCurrency,
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  departure_time,
  arrival_date,
  arrival_time,
  carrier,
  stops,
  price,
}) => {
  const formatDate = (date: string) => {
    const parsedDate = parse(date, 'dd.MM.yy', new Date());
    return format(parsedDate, 'd MMM yyyy, EEE', { locale: ru });
  };

  return (
    <div className="ticket_wrapper">
      <div className="ticket_left-side">
        <img src={carrier==='TK' ? TK : carrier==='SU' ? SU  : carrier==='S7' ? S7 : BA } alt="carrier" width="130px" />
        <button className="ticket_buy-button">
          Купить <br /> за {price} {currentCurrency=== 'RUB' ? '₽' : currentCurrency=== 'USD' ? '$' : '€'}
        </button>
      </div>
      <hr className="ticket_separator" />
      <div className="ticket_right-side">
        <div className="ticket_right-side_time">
          <span className="ticket_time">{departure_time}</span>
          <div className="ticket_right-side_stops">
            <span>
              {stops !== 0 && stops}
              {stops === 1 ? ' пересадка' : stops === 0 ? 'прямой рейс' : ' пересадки'}
            </span>
            <hr className="time_separator" /> <img src="" alt="" />
          </div>
          <span className="ticket_time">{arrival_time}</span>
        </div>
        <div className="ticket_right-side_date">
          <div className='ticket_right-side_date_origin'>
            <span className="ticket_right-side_date_origin_city">{origin}, {origin_name}</span>
            <span className="ticket_right-side_date_origin_date">{formatDate(departure_date)}</span>
          </div>
          <div className='ticket_right-side_date_destination'>
            <span className="ticket_right-side_date_origin_city"> {destination_name}, {destination}</span>
            <span className="ticket_right-side_date_origin_date">{formatDate(arrival_date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;