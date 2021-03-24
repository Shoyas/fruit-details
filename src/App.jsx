import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Components/Home/Head/Head';
import Body from './Components/Home/Body/Body';
import Footer from './Components/Home/Footer/Footer';

const App = () => {
    return (
        <div>
            <Head/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default App;