import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Tu princesa está en otro castillo (página no encontrada)</h1>
      <Link to={'/'}>
        <button>Regresar</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
