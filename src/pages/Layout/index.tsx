import { Box, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import Corpo from '../Corpo';
import LandingPage from '../LandingPage';
import classes from '*.module.css';
import IM from '../../assets/img/ilha.jpg'

const useStyles = makeStyles((theme:Theme) =>{{
    root:{

    }
   
}})

const Layout:React.FC = () =>{
    const classes = useStyles();

    return(
        <>
            <Box
                display='flex'
                flexDirection='column'
                
            >
                <div className={classes.root}></div>
                <LandingPage />
                <Corpo />
            </Box>
        </>
    );
}
export default Layout;