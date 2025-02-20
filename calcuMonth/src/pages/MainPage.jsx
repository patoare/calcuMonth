import { useState } from 'react'
import '../App.css'

function MainPage() {
  const [totals, setTotals] = useState([0, 0, 0, 0, 0]);
  const [inputs, setInputs] = useState([0, 0, 0, 0, 0]);
  const [generalTotal, setGeneralToatal] = useState(0);

  const categoryValues = [1, 2, 3, 4, 5];

  const handleInputChange = (index, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = Number(value); // Actualiza el valor del input en la posición correspondiente
    setInputs(updatedInputs);
  };

  const handleAdd = (index) => {
    const updatedTotals = [...totals];
    updatedTotals[index] += inputs[index];
    setTotals(updatedTotals);
    setGeneralToatal(generalTotal + inputs[index]);
  
  const updatedInputs = [...inputs];
  updatedInputs[index] = 0;
  setInputs(updatedInputs)

};

return (
  <>
    <div className="title">
      <h1>Current Month</h1>
    </div>
    <div className="tabla">
      <table>
        <tbody>
          <tr className="fila">
            <th className="categoria">Supermercado</th>
            <th className="categoria">Salidas</th>
            <th className="categoria">Transporte</th>
            <th className="categoria">Gastos Bachi</th>
            <th className="categoria">Gastos Ticio</th>
          </tr>
          <tr className="fila">
            {inputs.map((inputValue, index) => (
              <th key={index} className="categoria">
                
                <input className='inputStyle'
                  type="number"
                  value={inputValue}
                  onChange={(e) => handleInputChange(index, e.target.value)} // Actualizar el valor del input
                />
                <button className='boton' onClick={() => handleAdd(index)}>+</button>
                <p>Total Categoria: ${totals[index]}</p>
              </th>
            ))}
          </tr>
          <tr>
            <th colSpan={5}>
              <h3>Total gastos mensuales</h3>
              <textarea className='inputStyle' value={generalTotal} readOnly></textarea> {/* Mostrar el total general */}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);
}

export default MainPage;