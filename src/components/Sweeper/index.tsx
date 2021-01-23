import * as React from 'react';
import { IBeer } from '../../interfaces/IBeer';
import './style.css';

interface ISweeper {
    beers: IBeer[],
    loading: boolean,
    error: boolean 
}

const Sweeper: React.FC<ISweeper> = ({beers, loading, error}) => {
    
    return (
        
        <div className="slider">
            {beers && beers.map((element) => {
                return(
                    <React.Fragment key={element.id}>
                        <div className="slider__content">
                            <img className="slider__image" src={element.image_url} alt="beerImage"/>
                            <span className="slider__name">{element.name}</span>
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default Sweeper;