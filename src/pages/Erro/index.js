import { Link } from 'react-router-dom';
import './style.css';

function Erro(){
  return(
    <div className='container'>
    <div className='post'>
      <h1>404</h1>
      <h2>Pagina não encontrada!</h2>
      <Link to="/">Veja todas as receitas!</Link>
    </div>
    </div>
  )
}

export default Erro;