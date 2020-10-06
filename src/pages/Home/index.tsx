import React from 'react';
import {
    AppBar, 
    IconButton, 
    makeStyles, 
    Toolbar,
    Button, 
    Box,
    Drawer, 
    List, 
    ListItemIcon, 
    ListItemText, 
    ListItem, 
    Divider,
    Typography,
    ListSubheader, 
    Grid,
    Hidden 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import logo from '../../assets/img/preto.png'
import thumb1 from '../../assets/img/thumb1.png'

import HomeIcon from '@material-ui/icons/Home'
import Subscriptions from '@material-ui/icons/Subscriptions'
import Whatshot from '@material-ui/icons/Whatshot'

import VideoLibrary from '@material-ui/icons/VideoLibrary'
import History from '@material-ui/icons/History'
import classes from '*.module.css';

const useStyles = makeStyles((theme) => ({
    root:{
      height:'100vh',
    //   backgroundImage:URL('../assets/img/ilha.jpg'),
    },

    appBar:{
        boxShadow:'none',
        zIndex: theme.zIndex.drawer + 1
    },
    grow:{
        flexGrow: 1
    },
    icons:{
        marginRight:theme.spacing(5)
    },
    menuIcon:{
        marginRight:theme.spacing(5),
        marginLeft:theme.spacing(6)

    },
    logo:{
        height:27
    },
    drawer:{
        width:240,
        flexShrink:0,
    },
    drawerPaper:{
        width:240,
        borderRight:'none',
    },
    listItemText:{
        fontSize:14
    },
    listItem:{
        paddingTop:4,
        paddingBottom:4
    },
    subheader:{
        textTransform:'uppercase'
    },
    tituloBox:{
        fontWeight:800
    }
  }));

  
  
const videos = [
    {
      id: 1,
      title:'Lorem Ipsum | é simplesmente um texto fictício da indústria de impressão e composição.',
      channel: 'Curso',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: `${thumb1}`,
      thumb: `${thumb1}`,
    },
    {
      id: 2,
      title:'Lorem Ipsum | é simplesmente um texto fictício da indústria de impressão e composição.',
      channel: 'Curso',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: `${thumb1}`,
      thumb: `${thumb1}`,
    },
    {
      id: 3,
      title:'Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição.',
      channel: 'Curso',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: `${thumb1}`,
      thumb: `${thumb1}`,
    },
    {
      id: 4,
      title:
      'Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição.',
      channel: 'Curso',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: `${thumb1}`,
      thumb: `${thumb1}`,
    },
    {
      id: 5,
      title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
      channel: 'Lucas Nhimi',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: `${thumb1}`,
      thumb: `${thumb1}`,
    },
    {
      id: 6,
      title: 'Lorem Ipsum | é simplesmente um texto fictício da indústria de impressão e composição.',
      channel: 'Curso',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: `${thumb1}`,
      thumb: `${thumb1}`,
    },
    {
      id: 7,
      title:'Lorem Ipsum I é simplesmente um texto fictício da indústria de impressão e composição.',
      channel: 'Curso',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: `${thumb1}`,
      thumb: `${thumb1}`,
    },
    {
      id: 8,
      title:
      'Lorem Ipsum | é simplesmente um texto fictício da indústria de impressão e composição.',
      channel: 'Curso',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: `${thumb1}`,
      thumb: `${thumb1}`,
    },
    {
        id: 9,
        title:
        'Lorem Ipsum | é simplesmente um texto fictício da indústria de impressão e composição.',
        channel: 'Curso',
        views: '1,9 mi de visualizações',
        date: 'há 1 semana',
        avatar: `${thumb1}`,
        thumb: `${thumb1}`,
      }
]



const Home:React.FC = () =>{
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start"  color="inherit" className={classes.menuIcon} aria-label="menu">
                        <MenuIcon /> 
                    </IconButton>
                    <img src={logo} className={classes.logo} alt="Logo do youtube "/>
                    <div className={classes.grow}/>
                    <IconButton edge="start"  color="inherit" className={classes.icons} aria-label="menu">
                        <VideoCall /> 
                    </IconButton>
                    <IconButton edge="start"  color="inherit" className={classes.icons} aria-label="menu">
                        <AppsIcon /> 
                    </IconButton>
                    <IconButton edge="start"  color="inherit" className={classes.icons} aria-label="menu">
                        <MoreVert /> 
                    </IconButton>
                    <Button 
                        variant="outlined" 
                        color="secondary"
                        startIcon={<AccountCircle />}
                    >Fazer Login</Button>
                </Toolbar>
            </AppBar>
            <Box display='flex'>
                <Hidden mdDown>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div>
                    <List>
                        <ListItem button classes={{root:classes.listItem}}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary:classes.listItemText,
                                }} 
                                primary={"Inicio"} 
                            />
                        </ListItem>
                        <ListItem button classes={{root:classes.listItem}}>
                            <ListItemIcon><Whatshot /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary:classes.listItemText,
                                }} 
                                primary={"Em alta"} 
                            />
                        </ListItem>
                        <ListItem button classes={{root:classes.listItem}}>
                            <ListItemIcon><Subscriptions /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary:classes.listItemText,
                                }} 
                                primary={"Inscrições"} 
                            />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button classes={{root:classes.listItem}}>
                            <ListItemIcon><VideoLibrary /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary:classes.listItemText,
                                }} 
                                primary={"Biblioteca"} 
                            />
                        </ListItem>
                        <ListItem button classes={{root:classes.listItem}}>
                            <ListItemIcon><History /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary:classes.listItemText,
                                }} 
                                primary={"Histórico"} 
                                />
                        </ListItem>
                    </List>
                    <Divider />
                    <Box p={7}>
                        <Typography variant='body2'>
                            Faça login para curtir vídeos, comentar e se inscrever.
                        </Typography>
                        <Box mt={2}>
                            <Button
                                variant='outlined'
                                color='secondary'
                                startIcon={<AccountCircle />}
                            >Fazer login</Button>
                        </Box>    
                    </Box>
                    <Divider />
                    <List
                        component='nav'
                        aria-labelledby='nested-list-subheader'
                        subheader={
                            <ListSubheader
                                component='div'
                                id='nested-list-subheader'
                                className={classes.subheader}
                            >O Melhor do youtube
                            </ListSubheader>
                        }
                    >
                    <ListItem button classes={{root:classes.listItem}}>
                            <ListItemIcon><History /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary:classes.listItemText,
                                }} 
                                primary={"Musica"} 
                                />
                    </ListItem>    
                    <ListItem button classes={{root:classes.listItem}}>
                            <ListItemIcon><History /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary:classes.listItemText,
                                }} 
                                primary={"Esportes"} 
                                />
                    </ListItem>
                    <ListItem button classes={{root:classes.listItem}}>
                            <ListItemIcon><History /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary:classes.listItemText,
                                }} 
                                primary={"Jogos"} 
                                />
                    </ListItem>
                    <ListItem button classes={{root:classes.listItem}}>
                            <ListItemIcon><History /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary:classes.listItemText,
                                }} 
                                primary={"Filmes"} 
                                />
                    </ListItem>    
                    <ListItem button classes={{root:classes.listItem}}>
                            <ListItemIcon><History /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary:classes.listItemText,
                                }} 
                                primary={"Notícias"} 
                                />
                    </ListItem>    
                    <ListItem button classes={{root:classes.listItem}}>
                            <ListItemIcon><History /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary:classes.listItemText,
                                }} 
                                primary={"Ao vivo"} 
                                />
                    </ListItem>
                    <ListItem button classes={{root:classes.listItem}}>
                            <ListItemIcon><History /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary:classes.listItemText,
                                }} 
                                primary={"Destaques"} 
                                />
                    </ListItem>    
                    <ListItem button classes={{root:classes.listItem}}>
                            <ListItemIcon><History /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary:classes.listItemText,
                                }} 
                                primary={"Videos 360"} 
                                />
                    </ListItem>
                    <ListItem button classes={{root:classes.listItem}}>
                            <ListItemIcon><History /></ListItemIcon>
                            <ListItemText 
                                classes={{
                                    primary:classes.listItemText,
                                }} 
                                primary={"Procurar mais"} 
                                />
                    </ListItem>
                    </List>    
                    </div>
                </Drawer>
                </Hidden>
                <Box p={8}>
                    <Toolbar />
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        className={classes.tituloBox}
                    >Recomendados
                    </Typography>
                    <Grid container spacing={4}>
                        {

                            videos.map((items, index) =>(
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <Box>
                                    <img
                                        style={{width:'100%'}}
                                        alt={items.title}
                                        src={items.thumb}
                                    />
                                <Box>
                                <Typography
                                    style={{fontWeight:600}}
                                    gutterBottom
                                    variant='body1'
                                    color='textPrimary'
                                >
                                {items.title}
                                </Typography>
                                <Typography
                                    display='block'
                                    variant='body2'
                                    color='textSecondary'
                                >
                                {items.channel}
                                </Typography>  
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                >{`${items.views} . ${items.date}`}
                                </Typography>  
                                </Box>
                                </Box>
                            </Grid>
                        ))        
                    }
                    </Grid>
                </Box>                
                                
            </Box>
        </div>
    )
}

export default Home;