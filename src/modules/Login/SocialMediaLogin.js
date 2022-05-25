import { Button, Stack } from "@mui/material"


const SocialMediaLogin = () => {
    return(
        <Stack direction={'row'} justifyContent='space-evenly'>
            <Button>Google</Button>
            <Button>Facebook</Button>
        </Stack>
    )
}

export default SocialMediaLogin;