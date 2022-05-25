import { Container } from "@mui/system";
import Heading from "../../modules/Heading";
import InputFields from "../../modules/Signup/InputFields";
import { Box,Button,InputLabel,Paper,Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = props => {
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
            <Box my={7} justifyContent={'space-around'} display='flex'>
                <Typography color={'primary'}>Already have and account ?</Typography>
                <Button variant="contained" size="medium" onClick={()=>{navigate('/login')}}>Login</Button>
            </Box>      
        </Container>
    )
}

export default Signup;