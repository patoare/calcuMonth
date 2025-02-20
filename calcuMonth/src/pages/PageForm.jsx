import '../App.css';

const PageForm = () => {
return (
    <>
    <h3>Asigna tus categorias segun tus preferencias</h3>
    <form className="formCreate" >
    <label className="labelForm" >Current month
        <input 
        className="textCreate"
        type="text"
        name="month"
        required   
        />
    </label>
    <label className="labelForm" >Categoria 1
        <input 
        className="textCreate"  type="text"
        name="categoria1"
        required  
        />
    </label>
    <label className="labelForm" >Categoria 2
        <input 
        className="textCreate"
        type="text"
        name="surname"
        required   
        />
    </label>
    <label className="labelForm" >Categoria 3
        <input 
        className="textCreate"
        type="text"
        name="surname"
        required   
        />
    </label>
    <label className="labelForm" >Categoria 4
        <input 
        className="textCreate"
        type="text"
        name="surname"
        required   
        />
    </label>
    <label className="labelForm" >Categoria 5
        <input 
        className="textCreate"
        type="text"
        name="surname"
        required   
        />
    </label>
    <button className="button" type="submit">Enviar</button>
    </form>
    </>
)
} 
export default PageForm;