import React,{useReducer} from 'react'
import { InitialState } from './Stores/app.store';
import { AppReducer } from './AppReducer';

export const AppContext = React.createContext(InitialState);

export const ContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, InitialState)
    return (
        <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    );
}


