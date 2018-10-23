import React from 'react';

const Card = (props) => {
    const { robot } = props;
    const source = `https://robohash.org/${robot.id}?200x200`;
    return (
        <div className='bg-orange dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='ninja' src={source} />
            <div>
                <h2>{robot.name}</h2>
                <p>{robot.email}</p>
            </div>
        </div>
    );
}

// class Card extends Component {
//     render() {
//         return(
//             <div>test</div>
//         )
//     }
// }


export default Card;