import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PageForm = () => {
    const [formData, setFormData] = useState({month: '', categoria1: '', categoria2: '', categoria3: '', categoria4: '', categoria5: ''});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/', { state: formData });
    };

return (
    <>
    <h3>Asigna tus categorias segun tus preferencias</h3>
    <form className="formCreate" onSubmit={handleSubmit} >
    <label className="labelForm" >Current month
        <input 
        className="textCreate"
        type="text"
        name="month"
        value={formData.month}
        onChange={handleChange}
        required   
        />
    </label>
    <label className="labelForm" >Categoria 1
        <input 
        className="textCreate"  
        type="text"
        name="categoria1"
        value={formData.categoria1}
        onChange={handleChange}
        required  
        />
    </label>
    <label className="labelForm" >Categoria 2
        <input 
        className="textCreate"
        type="text"
        name="categoria2"
        value={formData.categoria2}
        onChange={handleChange}
        required   
        />
    </label>
    <label className="labelForm" >Categoria 3
        <input 
        className="textCreate"
        type="text"
        name="categoria3"
        value={formData.categoria3}
        onChange={handleChange}
          
        />
    </label>
    <label className="labelForm" >Categoria 4
        <input 
        className="textCreate"
        type="text"
        name="categoria4"
        value={formData.categoria4}
        onChange={handleChange}
          
        />
    </label>
    <label className="labelForm" >Categoria 5
        <input 
        className="textCreate"
        type="text"
        name="categoria5"
        value={formData.categoria5}
        onChange={handleChange}
        
        />
    </label>
    <button className="button" type="submit">Enviar</button>
    </form>
    </>
)
} 
export default PageForm;