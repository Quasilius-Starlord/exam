import { Typography } from "@mui/material";
import { Container } from "@mui/system";


const Signup = props => {
    return(
        <Container maxWidth='lg' sx={{minHeight:'100vh'}}>
            <Typography elevation={0} variant='h3' sx={{pt:15}}>Exam</Typography>
        </Container>
    )
}

export default Signup;