import { useState } from 'react';
import AlimentacionOptions from '../Cards/food';
import HotelOptions from '../Cards/hotels';
import Destiny from '../Cards/destiny';
import planDeViajes from '../../../utils/data';

const TravelForm = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    alimentacion: '',
    hotel: '',
    destino: ''
  });

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='form'>
      <form>
      <AlimentacionOptions
        selectedOption={selectedOptions.alimentacion}
        handleOptionChange={(e) => handleOptionChange(e)}
        options={planDeViajes.alimentacion}
      />
      <HotelOptions
        selectedOption={selectedOptions.hotel}
        handleOptionChange={(e) => handleOptionChange(e)}
        options={planDeViajes.hoteles}
      />
      <Destiny
        selectedOption={selectedOptions.destino}
        handleOptionChange={(e) => handleOptionChange(e)}
        options={Object.values(planDeViajes.destinosdla)}
      />
    </form>
    </div>
    
  );
};

export default TravelForm;


