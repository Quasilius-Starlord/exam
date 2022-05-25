import { Container } from "@mui/system";
import Heading from "../../modules/Heading";
import InputFields from "../../modules/Signup/InputFields";
import { Box,Button,InputLabel,Paper,Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = props => {
    const navigate = useNavigate();
    return(
        <Container maxWidth='lg' sx={{minHeight:'100vh'}}>
            <Heading />
            <InputFields />
            <Box my={7} justifyContent={'space-around'} display='flex'>
                <Typography color={'primary'}>Already have and account ?</Typography>
                <Button variant="contained" size="medium" onClick={()=>{navigate('/login')}}>Login</Button>
            </Box>      
        </Container>
    )
}

export default Signup;