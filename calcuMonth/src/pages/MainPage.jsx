import { useState } from 'react'
import '../App.css'
import { useLocation, useNavigate } from 'react-router-dom';

function MainPage() {
  const [totals, setTotals] = useState([0, 0, 0, 0, 0]);
  const [inputs, setInputs] = useState(["", "", "", "", "" ]);
  const [generalTotal, setGeneralTotal] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  
  if (!formData) {
    return <h2>No hay datos. Completa el formulario primero.</h2>;
  }

  const handleInputChange = (index, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = Number(value); // Actualiza el valor del input en la posición correspondiente
    setInputs(updatedInputs);
  };

  const handleAdd = (index) => {
    const updatedTotals = [...totals];
    updatedTotals[index] += inputs[index];
    setTotals(updatedTotals);
    setGeneralTotal(generalTotal + inputs[index]);
  
  const updatedInputs = [...inputs];
  updatedInputs[index] ="";
  setInputs(updatedInputs)

};

return (
  <>
    <div className="title">
      <h1>{formData.month}</h1>
    </div>
    <div className="tabla">
      <table>
        <tbody>
          <tr className="fila">
            <th className="categoria">{formData.categoria1}</th>
            <th className="categoria">{formData.categoria2}</th>
            <th className="categoria">{formData.categoria3}</th>
            <th className="categoria">{formData.categoria4}</th>
            <th className="categoria">{formData.categoria5}</th>
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