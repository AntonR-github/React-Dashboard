import { Box , useTheme, Typography } from '@mui/material';
import Header from '../../components/Header/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';


const FAQ = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                    事 曰： 意 耳 覽 矣. 曰： 誨 覽 事 矣 」. 
                    」 關雎 去 ，可 曰： 耳 出. 關雎 出 覽 曰： 」 矣 去 ，可. 
                    父親回衙 汗流如雨 吉安而來 玉，不題 冒認收了. 
                    驚異 德泉淹 第八回 第十回 第二回. 事 去 意 」 關雎.  
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                    事 曰： 意 耳 覽 矣. 曰： 誨 覽 事 矣 」. 
                    」 關雎 去 ，可 曰： 耳 出. 關雎 出 覽 曰： 」 矣 去 ，可. 
                    父親回衙 汗流如雨 吉安而來 玉，不題 冒認收了. 
                    驚異 德泉淹 第八回 第十回 第二回. 事 去 意 」 關雎.  
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Frequently Asked Question 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                    事 曰： 意 耳 覽 矣. 曰： 誨 覽 事 矣 」. 
                    」 關雎 去 ，可 曰： 耳 出. 關雎 出 覽 曰： 」 矣 去 ，可. 
                    父親回衙 汗流如雨 吉安而來 玉，不題 冒認收了. 
                    驚異 德泉淹 第八回 第十回 第二回. 事 去 意 」 關雎.  
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Frequently Asked Question 2
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                    事 曰： 意 耳 覽 矣. 曰： 誨 覽 事 矣 」. 
                    」 關雎 去 ，可 曰： 耳 出. 關雎 出 覽 曰： 」 矣 去 ，可. 
                    父親回衙 汗流如雨 吉安而來 玉，不題 冒認收了. 
                    驚異 德泉淹 第八回 第十回 第二回. 事 去 意 」 關雎.  
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Frequently Asked Question 3
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                    事 曰： 意 耳 覽 矣. 曰： 誨 覽 事 矣 」. 
                    」 關雎 去 ，可 曰： 耳 出. 關雎 出 覽 曰： 」 矣 去 ，可. 
                    父親回衙 汗流如雨 吉安而來 玉，不題 冒認收了. 
                    驚異 德泉淹 第八回 第十回 第二回. 事 去 意 」 關雎.  
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Frequently Asked Question 4
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                    事 曰： 意 耳 覽 矣. 曰： 誨 覽 事 矣 」. 
                    」 關雎 去 ，可 曰： 耳 出. 關雎 出 覽 曰： 」 矣 去 ，可. 
                    父親回衙 汗流如雨 吉安而來 玉，不題 冒認收了. 
                    驚異 德泉淹 第八回 第十回 第二回. 事 去 意 」 關雎.  
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;