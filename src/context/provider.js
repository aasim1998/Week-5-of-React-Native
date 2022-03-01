// import React , {createContext, useReducer} from "react";
// import contacts from "./reducers/contacts";
// import contactsInitialState from "./initialStates/contactsInitialState";
// import authInitialState from './initialStates/authState';
// import auth from "./reducers/auth";

// export const GlobalContext = createContext();



// const GlobalProvider=({children})=> {
//     const [authState , authDispatch] = useReducer(auth , authInitialState)
//     const [ContactsState , ContactsDispatch] = useReducer(contacts , contactsInitialState)
//     return(
//         <GlobalContext.Provider value={{authState , ContactsState , authDispatch , ContactsDispatch }}>{children}</GlobalContext.Provider>

//     )

// }

// export default GlobalProvider;


import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/authState';
import contactsInitialState from './initialStates/contactsInitialState';
import auth from './reducers/auth';
import contacts from './reducers/contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;