import * as React from 'react';
import { IBeer } from '../../interfaces/IBeer';
import {BeerContext, IInitialState} from '../../context/context';
import './style.css';


const Sweeper: React.FC = () => {

    const [state, getBeersAction] = React.useContext<IInitialState | any>(BeerContext);
    const [page, setPage] = React.useState<number>(1);
    const loader = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        getBeersAction(page);
    },[])

    const handleObserver = (entities: any) => {
        const target = entities[0];
        if (target.isIntersecting) {   
            setPage((page) => page + 1)
        }
    }

    React.useEffect(() => {
        let options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if(loader.current) {
            observer.observe(loader.current);
        }

    },[])

    React.useEffect(() => {
        getBeersAction(page);
    },[page])
    
    return (
        
        <div className="slider">
            {state.beers && state.beers.map((element: IBeer, index: number) => {
                return(
                    <React.Fragment key={`${element.id}+${index}`}>
                        <div className="slider__content">
                            <img className="slider__image" src={element.image_url} alt="beerImage"/>
                            <span className="slider__name">{element.name}</span>
                        </div>
                    </React.Fragment>
                );
            })}
            <div className="loading" ref={loader}>
                <h2>Load More</h2>
            </div>
        </div>
    );
}

export default Sweeper;