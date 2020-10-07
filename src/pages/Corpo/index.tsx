import React from 'react';
import { 
    Box,
    makeStyles 
} from '@material-ui/core';
import CardPromocao from '../../components/CardPromocao';
import useWindowPosition from '../../components/hook';

const useStyles = makeStyles((theme) =>{{
    root:{
        // minHeight:'100vh',
        // display: flex,
        // justifyContent:'center',
        // alignItems:'center'
    }
}});
const Corpo:React.FC = () =>{

    const classes = useStyles();
    const checked = useWindowPosition('header');

    return(
        <>
            <Box
                display='flex'
                justifyContent='center'
            >

                <CardPromocao />
                <CardPromocao />
            </Box>
        </>
    );
}
export default Corpo;