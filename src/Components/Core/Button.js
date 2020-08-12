import React from 'react';

// class Button extends Component {

//     render() {
//         const {
//             isSelected,
//             children,
//             onClick
//         } = this.props;

//         let btnClass = ["btn"];

//         if (isSelected === true) {
//             btnClass = "btn-primary"
//         }

//         console.log("button#isSelected", isSelected);
//         console.log("button#isSelected", children);
//         console.log("button#isSelected", onClick);

//         return (
//             <button type="button" className={`"btn" ${btnClass}`}>
//                 {children}
//             </button>
//         );
//     }
// }

const Button = ({ isSelected, onClick, children }) => {

    const btnClasses = ['btn'];

    btnClasses.push(isSelected ? 'btn-primary' : 'btn-outline-primary');

    return (
        <button
            className={btnClasses.join(' ')}
            onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;