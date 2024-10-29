import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h3>Opps!! Sorry Data Not Found</h3>
            <p>
                {
                    error.status === 404 && <div>
                        <h3>There is No Items here Go Back to Home and Try later</h3>
                    </div>
                }
                <p>
                    {
                        error.statusText && error.statusText
                    }
                </p>
            </p>
            <Link to="/"><button>Go Home</button></Link>
        </div>
    );
};

export default Error;