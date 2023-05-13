import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlineIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlineIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

const TopBar = () => {
    const theme = useTheme(); 
    const colors = tokens(theme.palette.mode); // get colors from theme
    const colorMode = useContext(ColorModeContext); // get color mode from ColorModeContext

    return (<Box display="flex" justifyContent="space-between" p={2}>
        {/* Search Bar */}
        <Box 
        display="flex"
        backgroundColor={colors.primary[400]} 
        borderRadius = "3px"
        >
         <InputBase sx={{ ml: 2, flex: 1}} placeholder='search'></InputBase>   
        <IconButton>
            <SearchIcon type="button" sx={{ p: 1}} />
        </IconButton>
        </Box>

        {/* Icons */}
        <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
               {theme.palette.mode === 'dark' ? <LightModeOutlineIcon /> : <DarkModeOutlineIcon />}
            </IconButton>
            <IconButton>
              < NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
               < SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
                < PersonOutlinedIcon />
            </IconButton>
        </Box>
    </Box>);


}

export default TopBar;