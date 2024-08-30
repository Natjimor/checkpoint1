/* eslint-disable react/prop-types */

const AlimentacionOptions = ({ selectedOption, handleOptionChange, options }) => {
  return (
    <div>
      <h2>Seleccione un plan de alimentación:</h2>
      {options.map((option) => (
        <label key={option.titulo}>
          <input
            type="radio"
            name="alimentacion"
            value={option.titulo}
            checked={selectedOption === option.titulo}
            onChange={handleOptionChange}
          />
          <img src={option.imagen} alt={option.titulo} style={{ width: '20%', height: '20%' }} />
          {option.titulo} - ${option.precio}
        </label>
      ))}
    </div>
  );
};
export default AlimentacionOptions;
