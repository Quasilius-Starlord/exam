import { Container,Box,Button,InputLabel,Paper,Typography } from "@mui/material";
import { useState } from "react";
import InputFields from "../../modules/Login/InputFields";
import SocialMediaLogin from "../../modules/Login/SocialMediaLogin";
import { useNavigate } from "react-router-dom";
import Heading from "../../modules/Heading";

const Login = props =>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    return(
        <Container maxWidth='lg' sx={{minHeight:'100vh'}}>
            <Heading />
            <InputFields
                email={email} setEmail={setEmail}
                password={password} setPassword={setPassword}
                confPassword={confPassword} setConfPassword={setConfPassword} />
        
            <SocialMediaLogin />
            <Box justifyContent={'flex-end'} display='flex'>
                <Button variant="text">Forgot Password ?</Button>
            </Box>
            <Box my={7} justifyContent={'space-around'} display='flex'>
                <Typography color={'primary'}>Dont have and account ?</Typography>
                <Button variant="contained" size="medium" onClick={()=>{navigate('/signup')}}>Create Account</Button>
            </Box>
        </Container>
    )
};

export default Login;