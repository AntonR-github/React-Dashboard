import { Box,Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header/Header";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
};  

const phoneRegExp = /^[0-9]{10}$/;

const userScheme = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    contact: Yup.string()
                .matches(phoneRegExp, "Invalid Phone Number - Must Be 10 Digits Long and Contain Numbers Only")
                .required("Required"),
    address1: Yup.string().required("Required"),
    address2: Yup.string().required("Required"),
});

const Form = () => {

    const isNotMobile = useMediaQuery("(min-width: 600px)");

    const handFormSubmit = (values) => {
        console.log(values);
    };

    return (

    <Box margin="20px">
        <Header title="CREATE USER" subtitle="Create a New User Profile" />
        <Formik
            onSubmit={handFormSubmit}
            initialValues={initialValues}
            validationSchema={userScheme}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Box display="grid"
                         gap="30px"
                         gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                         sx={{
                            "& .div":{ gridColumn: isNotMobile ? undefined : "span 4" },
                         }}  
                    >
                        <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="First Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            name="firstName"
                            error={!!touched.firstName && !!errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                            sx={{
                                gridColumn: "span 2",
                            }}
                        />
                        <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Last Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.lastName}
                            name="lastName"
                            error={!!touched.lastName && !!errors.lastName}
                            helperText={touched.lastName && errors.lastName}
                            sx={{
                                gridColumn: "span 2",
                            }}
                        />
                        <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            sx={{
                                gridColumn: "span 4",
                            }}
                        />
                        <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Contact Number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.contact}
                            name="contact"
                            error={!!touched.contact && !!errors.contact}
                            helperText={touched.contact && errors.contact}
                            sx={{
                                gridColumn: "span 4",
                            }}
                        />
                        <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address 1"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address1}
                            name="address1"
                            error={!!touched.address1 && !!errors.address1}
                            helperText={touched.address1 && errors.address1}
                            sx={{
                                gridColumn: "span 4",
                            }}
                        />
                        <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address 2"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address2}
                            name="address2"
                            error={!!touched.address2 && !!errors.address2}
                            helperText={touched.address2 && errors.address2}
                            sx={{
                                gridColumn: "span 4",
                            }}
                        />

                    </Box>
                    <Box
                    display="flex"
                    justifyContent="end"
                    marginTop="20px"
                    >
                        <Button 
                        type="submit"
                        color="secondary"
                        variant="contained"
                        >
                            Create New User
                        </Button>
                    </Box>
                </form>
            )}

        </Formik>

    </Box>

    )
};

export default Form; 