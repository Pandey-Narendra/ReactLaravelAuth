import { Grid, Card, Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';
import login from '../../Images/login.png'
import UserLogin from './Auth/UserLogin';
import UserRegistration from './Auth/UserRegistration';

const TabPanel = (props) =>{
    const { children, value, index } = props;
    return(
        <div role='tabpanel' hidden={ value !== index }>
            {
                value ===index && ( <Box>{ children }</Box> )
            }
        </div>
    )
}

function LoginRegister() {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
  return ( <>
        <Grid container sx={{ height: '90vh' }}>
            <Grid item lg={7} sm={5} sx={ { backgroundImage: `url(${login})`,
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: { xs: 'none', sm: 'block' }
                }}>
            </Grid>
             <Grid item lg={5} sm={7} xs={12} >
                <Card sx={{ height: '100%', Width: '100%' }}>
                    <Box>
                        <Box sx={{  borderBottom:1, borderColor: 'divider' }}>
                            <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                                <Tab label='Login' sx={{textTransform: 'none', fontWeight:'bold'}}>Login</Tab>
                                <Tab label='Register' sx={{textTransform: 'none', fontWeight:'bold'}}>Register</Tab>
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}><UserLogin/></TabPanel>
                        <TabPanel value={value} index={1}><UserRegistration /></TabPanel>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    </>
  )
}

export default LoginRegister;