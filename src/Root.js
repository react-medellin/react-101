import React from 'react';

import Counter from './Counter';

// function Root() {
//     return React.createElement(
//         'h1',
//         null,
//         'Root component'//,
//         //React.createElement(
//         //    Counter
//         // )
//     );
// }

// const Root = () => {
//     return React.createElement(
//         'h1',
//         null,
//         'Root component'//,
//         //React.createElement(
//         //    Counter
//         // )
//     );
// }

function Root() {
    return (
        <section>
            <h1>Root component</h1>
            <Counter />
        </section>
    );
}

export default Root;