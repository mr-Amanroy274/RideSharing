import React,{useContext} from 'react';
import { UserContext } from '../context/UserContext';

const Verify = () => {
    const context = useContext(UserContext);
    if(context.data?.number){
        return(
            <Sms />
        )
    }
    
}
