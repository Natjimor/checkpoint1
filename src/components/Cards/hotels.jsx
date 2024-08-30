/* eslint-disable react/prop-types */

const HotelOptions = ({ selectedOption, handleOptionChange, options }) => {
  return (
    <div>
      <h2>Seleccione un hotel:</h2>
      {options.map((hotel) => (
        <label key={hotel.nombre}>
          <input
            type="radio"
            name="hotel"
            value={hotel.nombre}
            checked={selectedOption === hotel.nombre}
            onChange={handleOptionChange}
          />
          <img src={hotel.imagen} alt={hotel.nombre} style={{ width: '20%', height: '20%' }} />
          {hotel.nombre} - ${hotel.costo} - {hotel.estrellas} estrellas
        </label>
      ))}
    </div>
  );
};

export default HotelOptions;

