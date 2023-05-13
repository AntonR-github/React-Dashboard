import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlineIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlineIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlineIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlineIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlineIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlineIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlineIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlineIcon from '@mui/icons-material/MenuOutlined';
import MapOutlineIcon from '@mui/icons-material/MapOutlined';
 
const Item = ({title, to, icon, selected, setSelected}) => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);

    return (
        <MenuItem active={selected === title } 
                  style={{ color: colors.grey[100]}}
                  onClick={() => setSelected(title)}
                  icon={icon}
                  >
         <Typography>{title}</Typography>
         <Link to={to}/>
        </MenuItem>
    )
}

const SideBar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [Selected, setSelected] = useState('Dashboard');
 
    return (
        <Box
        sx={{
            '& .pro-sidebar-inner': {
                backgroundColor: `${colors.primary[400]}`, // !important 
            },
            '& .pro-icon-wrapper': {
                backgroundColor: 'transparent', // !important 
            },
            '& .pro-inner-item': {
                padding: '5px 35px 5px 20px', // !important 
            },
            '& .pro-inner-item:hover': {
                backgroundColor: '#868dfb', // !important
            },
            '& .pro-menu-item.active': {
                backgroundColor: '#6870fa', // !important
            },
        }}
        >
            <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape='square'>
                {/*Logo and Menu*/}
                <MenuItem  
                  onClick={() => setIsCollapsed(!isCollapsed)}  // toggle collapsed state
                  icon={isCollapsed ? <MenuOutlineIcon /> : undefined }
                  style={{
                    margin: '10px 0 20px 0',
                    color: colors.grey[100],
                  }}
                  >
                    {!isCollapsed && (  // if not collapsed, show logo and menu
                        <Box 
                        display='flex' 
                        justifyContent='space-between'
                        alignItems='center'
                        ml='15px'
                        >
                            <Typography
                            variant='h3'
                            color={colors.grey[100]}
                            >
                                ADMINS
                            </Typography>
                            <IconButton
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            >
                                <MenuOutlineIcon />
                            </IconButton>
                        </Box>
                    )}
                  </MenuItem>

                {/* USER */}
                {!isCollapsed && (
                    <Box mb='25px'>
                        <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        >
                            <img 
                             alt='profile-user'
                             width='100px'
                             height='100px'
                             src={`../../assets/user.png`}
                             style={{
                                cursor: 'pointer',
                                borderRadius: '50%',
                             }}
                            />
                        </Box>

                        <Box textAlign='center'>
                            <Typography
                            variant='h2'
                            color={colors.grey[100]}
                            fontWeight='bold'
                            sx={{
                                m: '10px 0 0 0'
                            }}
                            >John Doe</Typography>
                            <Typography
                             variant='h5'
                             color={colors.greenAccent[500]}
                            >Site Admin</Typography>
                        </Box>
                    </Box>
                )}

                {/* MENU ItEMS*/}
                <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                    <Item
                    title='Dashboard'
                    to='/'
                    icon={<HomeOutlineIcon />}
                    selected={Selected}
                    setSelected={setSelected}
                    />

                    <Typography
                    variant='h6'
                    color={colors.grey[300]}
                    sx={{ m: '15px 0 5px 20px' }}>
                        Data
                    </Typography>

                    <Item
                    title='Manage Team'
                    to='/team'
                    icon={<PeopleOutlineIcon />}
                    selected={Selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title='Contacts Info'
                    to='/contacts'
                    icon={<ContactsOutlineIcon />}
                    selected={Selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title='Invoices Balances'
                    to='/invoices'
                    icon={<ReceiptOutlineIcon />}
                    selected={Selected}
                    setSelected={setSelected}
                    />

                    <Typography
                    variant='h6'
                    color={colors.grey[300]}
                    sx={{ m: '15px 0 5px 20px' }}>
                        Pages
                    </Typography>

                    <Item
                    title='Profile Form'
                    to='/form'
                    icon={<PersonOutlineIcon />}
                    selected={Selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title='Calendar'
                    to='/calendar'
                    icon={<CalendarTodayOutlineIcon />}
                    selected={Selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title='FAQ'
                    to='/faq'
                    icon={<HelpOutlineIcon />}
                    selected={Selected}
                    setSelected={setSelected}
                    />

                    <Typography
                    variant='h6'
                    color={colors.grey[300]}
                    sx={{ m: '15px 0 5px 20px' }}>
                        Charts
                    </Typography>

                    <Item
                    title='Bar Chart'
                    to='/bar'
                    icon={<BarChartOutlineIcon />}
                    selected={Selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title='Pie Chart'
                    to='/pie'
                    icon={<PieChartOutlineOutlineIcon />}
                    selected={Selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title='Line Chart'
                    to='/line'
                    icon={<TimelineOutlineIcon />}
                    selected={Selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title='Geography Chart'
                    to='/geography'
                    icon={<MapOutlineIcon />}
                    selected={Selected}
                    setSelected={setSelected}
                    />
                </Box>
            </Menu>
            </ProSidebar>
        </Box>
    );

};

export default SideBar;