import * as React from 'react';
import Sweeper from './components/Sweeper';
import {BeerContext, IInitialState} from './context/context';

const App: React.FC = () => {
    const [state, getBeersAction] = React.useContext<IInitialState | any>(BeerContext);

    React.useEffect(() => {
        getBeersAction();
    },[])
    
    return <Sweeper beers={state.beers} loading={state.loading} error={state.error}/>
}

export default App;