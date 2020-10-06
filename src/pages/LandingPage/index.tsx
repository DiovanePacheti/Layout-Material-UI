import React, { useEffect, useState } from 'react';
import bc from '../assets/img/ilha.jpg';

import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { 
    AppBar, 
    Collapse, 
    IconButton, 
    makeStyles, 
    Toolbar,
    Typography
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        background: theme.palette.background.paper
    },
    appbarTitle:{
        // flexGrow:'1',
        flexGrow:1,
    },
    appbar:{
        background:'none',
        // fontFamily'Nunito',
    },
    appbarWrapper:{
        width:'80%',
        margin:'0 auto',
    },
    
    icon:{
        color:'#fff',
        fontSize:'2rem',
    },
    colorText:{
        color:'#5AFF3D',
    },
    title:{
        color:'#fff',
        fontSize:'4.5rem'
    },
    container:{
        textAlign:'center',
        
    },
    goDown:{
        color:'#5AFF3D',
        fontSize:'2rem'

    }

}))


const LandingPage: React.FC = () =>{

    const classes = useStyles();
    const [ checked, setChecked] = useState<boolean>(false);//estado que armazena o valor que vai disparar o efeito da tela

    useEffect(() =>{
        setChecked(true);
    },[]);//quando a pagina e carregada este hook dispara setando o efeito como true

    return(
        <>
         <div 
         className={classes.root}
         >
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        My<span className={classes.colorText}>Island.</span>
                    </h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse 
                in={checked}
                {...(checked ? {timeout: 1000} : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br /> My 
                        <span className={classes.colorText}>Island.</span>
                    </h1>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown}/>
                    </IconButton>
                </div>
            </Collapse>
         </div>      
        </>
    )
}
export default LandingPage;