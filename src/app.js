import React from 'react';
import ReactDOM from 'react-dom/client';

import HomeBody from './components/HomeBody';

// const parent = React.createElement("h1", {}, "Jai Shree Ram");

const AppLayout = () => {
    return(
        <div className="text-xl text-center">
            Jai Shree Ram
            <HomeBody />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);