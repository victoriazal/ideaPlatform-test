import './Filter.scss';
import { useState } from 'react';

interface FilterProps {
  onCurrencyChange: (currency: string) => void;
  onStopsChange: (stops: number[]) => void;
}

const Filter: React.FC<FilterProps> = ({ onCurrencyChange, onStopsChange }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('RUB');
  const [selectedStops, setSelectedStops] = useState<number[]>([]);

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
    onCurrencyChange(currency);
  };

  const handleStopsChange = (stop: number) => {
    const updatedStops = selectedStops.includes(stop)
      ? selectedStops.filter(s => s !== stop)
      : [...selectedStops, stop];
    setSelectedStops(updatedStops);
    onStopsChange(updatedStops);
  };

  return (
    <div className="filter_wrapper">
      <div className="filter_currency">
        <span>ВАЛЮТА</span>
        <div>
          {['RUB', 'USD', 'EUR'].map(currency => (
            <button
              key={currency}
              className={selectedCurrency === currency ? 'filter_currency-button active' : 'filter_currency-button '}
              onClick={() => handleCurrencyChange(currency)}
            >
              {currency}
            </button>
          ))}
        </div>
      </div>
      <div className="filter_transfers">
        <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
        <div className='filter_transfers'>
          {[0, 1, 2, 3].map(stop => (
            <label key={stop}>
              <input
                type="checkbox"
                checked={selectedStops.includes(stop)}
                onChange={() => handleStopsChange(stop)}
              />
              {stop === 0 ? 'Прямой рейс' : `${stop} пересадк${stop > 1 ? 'и' : 'а'}`}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;