import { useRouteError } from 'react-router-dom';
import '../assets/ErrorPage.css';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className='error-page'>
            <h1>Sorry about that! &#x1F614;</h1>
            <p>It appears an error has occurred...</p>
            <p className='error-page__detail'><i>{error.statusText || error.message}</i></p>
        </div>
    );
}

export default ErrorPage;