import React from 'react';

// const List = ({items, props}) => {

    // let itemsMap;
    // if(items) {
    //     itemsMap = items.map((item, key) => {
    //         return (
    //             <li key={key}>
    //                 {item.input} - {item.price} €
    //             </li>
    //         );
    //     })}
    // }

//     return (
//         <div>
//             <ul>
//                 {items && props.items.map((item, key) => {
//                     return (
//                         <li key={key}>
//                             {item.input} - {item.price} €
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// }

class List extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((item, key) => {
                        return (
                            <li key={key}>
                                {item.input} - {item.price} €
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default List;