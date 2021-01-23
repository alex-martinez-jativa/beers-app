import * as React from 'react'
import { IBeer } from '../interfaces/IBeer';
import * as type from './actionTypes';
import getBeersService from '../services/get-beers-service';


interface IProviderProps {
    children: React.ReactElement,
    state?: IInitialState,
    dispatch?: ({type}:{type:string}) => void;
    getBeersAction?: () => void;
}

export interface IInitialState {
    beers: IBeer[],
    loading: boolean,
    error: boolean,
}

const initialState: IInitialState = {
    beers: [],
    loading: false,
    error: false
}


const beerReducer = (state: IInitialState, action: any) : IInitialState => {
    switch(action.type) {
        case type.GET_BEERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GET_BEERS_SUCCESS:
            return {
                ...state,
                loading: false,
                beers: action.payload,
            }
        case type.GET_BEERS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state;
    }
}

export const BeerContext = React.createContext([{}, () => { }]);

const BeerProvider = ({ children } : IProviderProps) => { 
  // const [state, setTodos] = React.useState<IBeer[]>([]);
  const [state, dispatch] = React.useReducer(beerReducer, initialState);

  const getBeersAction = () => {
    try {
        (async() => {
            const response = await getBeersService();
            dispatch({
            type: type.GET_BEERS_SUCCESS,
            payload: response,
        })
        })()
        
    }catch(err) {
        dispatch({
            type: type.GET_BEERS_ERROR
        })
    }
  }

  return <BeerContext.Provider value = {[state, getBeersAction]}>
      {children}
  </BeerContext.Provider>
}

export default BeerProvider;