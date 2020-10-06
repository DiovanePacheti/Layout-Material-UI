import React from 'react';
import { 
    makeStyles 
} from '@material-ui/core';
import CardPromocao from '../../components/CardPromocao';

const useStyles = makeStyles((theme) =>{{

}});
const Corpo:React.FC = () =>{

    const classes = useStyles();
    return(
        <>
        <CardPromocao />
        </>
    );
}
export default Corpo;