/* eslint-disable react/prop-types */

const Destiny = ({ selectedOption, handleOptionChange, options }) => {
  return (
    <div>
      <h2>Seleccione un destino:</h2>
      {options.map((destino) => (
        <label key={destino.nombre}>
          <input
            type="radio"
            name="destino"
            value={destino.nombre}
            checked={selectedOption === destino.nombre}
            onChange={handleOptionChange}
          />
          <img src={destino.imagen} alt={destino.nombre} style={{ width: '20%', height: '20%' }} />
          {destino.nombre} - ${destino.precio}
        </label>
      ))}
    </div>
  );
};


export default Destiny;

