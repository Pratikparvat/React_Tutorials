import React from "react";

//with JSX--
// const Hello = () => {
//     return (<div id="demo">
//              <h1>Hello, Wishwas</h1>
//             </div> )
// }

//without JSX
const Hello = () => {

    return React.createElement('div',
                                {id:"demo",className:"class1"}, 
                                React.createElement('h1',null,"Hello, Vishwas."))
}

export default Hello;