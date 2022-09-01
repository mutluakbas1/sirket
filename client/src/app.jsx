import React from "react";
import AddStartUp from "./addStartUp";
import Sirket from "./sirket";


const App = ({ pageName }) => {

    const pageToShow = () => {
    
        if (pageName === 'sirket') return <Sirket />;
        if (pageName === 'addStartUp') return <AddStartUp />;
      

        return <div>Not Found</div>;
    };

    return (
        <div>

            {pageToShow()}

        </div>
    )

};

export default App;

