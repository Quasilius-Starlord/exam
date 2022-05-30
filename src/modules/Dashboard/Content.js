import { Box, Button, Grid, Item, Paper, Typography } from "@mui/material";


const Content = props => {
    return(
        <>
            <Box sx={{px:7, py:2, lineHeight:2, backgroundColor:'#FBAB7E', backgroundImage:'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at.
            </Box>
            <Box sx={{display:'flex', m:4}} justifyContent='center'>
                <Button size="large" variant="contained" color='success'>{'Start Test'}</Button>
            </Box>
            <Box sx={{p:4,backgroundColor:'#FBAB7E', backgroundImage:'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'}}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Paper sx={{p:5}}>
                            <Typography paragraph>Report</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper sx={{p:5}}>
                            <Typography paragraph>Report</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{m:4, display:'flex', flexDirection:'column'}}>
                <Button sx={{alignSelf:'center', m:2}} size="large" variant="contained" color='success'>{'Mock Test Series'}</Button>
                <Button sx={{alignSelf:'center', m:2}} size="large" variant="contained" color='success'>{'Start Exam'}</Button>    
            </Box>
            <Box sx={{px:7, py:2, lineHeight:2, backgroundColor:'#FBAB7E', backgroundImage:'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at.
            </Box>
        </>
    )
}

export default Content;