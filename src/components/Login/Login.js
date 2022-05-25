import { Container,Box,Button,InputLabel,Paper,Typography } from "@mui/material";
import { useState } from "react";
import InputFields from "../../modules/Login/InputFields";
import SocialMediaLogin from "../../modules/Login/SocialMediaLogin";

const Login = props =>{
    
    return(
        <Container maxWidth='lg' sx={{minHeight:'100vh'}}>
            <Typography elevation={0} variant='h3' sx={{pt:15}}>Exam</Typography>
            <InputFields />
            <SocialMediaLogin />
            <Box justifyContent={'flex-end'} display='flex'>
                <Button variant="text">Forgot Password ?</Button>
            </Box>
            <Box my={7} justifyContent={'space-around'} display='flex'>
                <Typography color={'primary'}>Dont have and account ?</Typography>
                <Button variant="contained" size="medium">Create Account</Button>
            </Box>
        </Container>
    )
};

export default Login;