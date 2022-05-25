import { Container } from "@mui/system";
import Heading from "../../modules/Heading";
import InputFields from "../../modules/Signup/InputFields";
import { Box,Button,InputLabel,Paper,Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = props => {
    const navigate = useNavigate();
    return(
        <Container maxWidth='lg' sx={{minHeight:'100vh'}}>
            <Heading />
        </Container>
    )
}

export default Dashboard;