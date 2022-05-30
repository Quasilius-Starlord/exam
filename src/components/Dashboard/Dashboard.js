import { Container } from "@mui/system";
import Heading from "../../modules/Heading";
import InputFields from "../../modules/Signup/InputFields";
import { AppBar, Box,Button,Drawer,IconButton,InputLabel,List,ListItem,ListItemButton,ListItemText,Paper,Toolbar,Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import Content from "../../modules/Dashboard/Content";
// import { useTheme } from "@emotion/react";

const Dashboard = props => {
    const navigate = useNavigate();
    const [ drawerOpen, setDrawerOpen ] = useState(false);
    const theme = useTheme();
    
    const DrawerStateChange = () => {
        setDrawerOpen(!drawerOpen);
        console.log('drawer chjanghed')
    }

    console.log(theme.mixins.toolbar)
    
    return(
        <>
            <AppBar position="fixed" sx={{zIndex:theme.zIndex.drawer+1}}>
            {/* <CssBaseline/> */}
                <Toolbar sx={theme.mixins.toolbar}>
                    <IconButton onClick={DrawerStateChange} size="large" edge='start' sx={{mr:2}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" sx={{flexGrow:1}}>{'Prep Club'}</Typography>
                    <Button variant="success" color="inherit">{'Sign up'}</Button>
                </Toolbar>
            </AppBar>
            <Drawer variant="persistent" open={drawerOpen} anchor='left'>
                <Box width={220} sx={{pt:8}}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText>{'sometewxt'}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText>{'sometewxt'}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <Box sx={{mt:theme.spacing(7)}}>
                <Content />
            </Box>
        </>
        // <Container maxWidth='lg' sx={{minHeight:'100vh'}}>
        //     <Heading />
        // </Container>
    )
}

export default Dashboard;