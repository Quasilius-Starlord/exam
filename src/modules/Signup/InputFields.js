import { Button, Input, InputLabel } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import { Box } from "@mui/system";

const InputFields = props => {
    return(
        <Box>
            <FormControl margin="normal" fullWidth={true}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input value={props.email} onChange={e=>{props.setEmail(e.target.value)}} id={'email'}></Input>
            </FormControl>
            <FormControl margin="normal" fullWidth={true}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input value={props.password} onChange={e=>{props.setPassword(e.target.value)}} type="password" id={'password'}></Input>
            </FormControl>
            <FormControl margin="normal" fullWidth={true}>
                <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
                <Input value={props.confPassword} onChange={e=>{props.setConfPassword(e.target.value)}} type="password" id={'confirm-password'}></Input>
            </FormControl>
            <FormControl margin="normal" fullWidth={false}>
                <Button variant="contained" size="large">Register</Button>
            </FormControl>
        </Box>
    )
};

export default InputFields;