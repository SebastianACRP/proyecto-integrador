import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box } from "@mui/material";
import "./contact.scss";

import {
    MESSAGE_REQUIRED,
    MESSAGE_TELEPHONE_INVALID,
    MESSAGE_EMAIL_INVALID,
    REGEX_TELEPHONE,
    REGEX_EMAIL,
} from "../../constanst/regexPattern.js";

import InputField from "../../components/form/inputField/InputField";
import Button from "../../components/button/Button";

import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import Alert from "../../components/alert/Alert.jsx";

const Contact = () => {
    const [ openAlert, setOpenAlert ] = useState(false);

    const validationSchema = yup.object({
        fullname: yup
            .string("Ingresa tu nombre y apellido")
            .min(7, "Ingresa un nombre y apellido que tenga mas de 7 carateres")
            .required(MESSAGE_REQUIRED),
        telephone: yup
            .string("Ingresa tu teléfono")
            .matches(REGEX_TELEPHONE, MESSAGE_TELEPHONE_INVALID)
            .required(MESSAGE_REQUIRED),
        email: yup
            .string("Ingresa tu email")
            .matches(REGEX_EMAIL, MESSAGE_EMAIL_INVALID)
            .required(MESSAGE_REQUIRED),
        consult: yup
            .string("Ingresa tu consulta")
            .min(11, "Ingresa una consulta que tenga entre 15 y 150 carateres")
            .required(MESSAGE_REQUIRED),
    });

    const formik = useFormik({
        initialValues: {
            fullname: "",
            telephone: "",
            email: "",
            consult: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            setOpenAlert(true);
            resetForm();
        },
    });

    return (
        <Box className="contact">
            <Box
                component="section"
                className="contact__section">
                <h3>Hace tu consulta</h3>

                <Box
                    component="form"
                    className="contact__section__form"
                    noValidate
                    autoComplete="off"
                    onSubmit={formik.handleSubmit}>
                    <InputField
                        label="Nombre y apellido"
                        name="fullname"
                        value={formik.values.fullname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                        errorMessage={formik.touched.fullname && formik.errors.fullname}
                        inputProps={{ maxLength: 25 }}>
                    </InputField>

                    <InputField
                        label="Teléfono"
                        name="telephone"
                        value={formik.values.telephone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.telephone && Boolean(formik.errors.telephone)}
                        errorMessage={formik.touched.telephone && formik.errors.telephone}
                        inputProps={{ maxLength: 15 }}>
                    </InputField>

                    <InputField
                        label="E-mail"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        errorMessage={formik.touched.email && formik.errors.email}
                        inputProps={{ maxLength: 50 }}>
                    </InputField>

                    <InputField
                        label="Consulta"
                        name="consult"
                        multiline
                        rows={5}
                        value={formik.values.consult}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.consult && Boolean(formik.errors.consult)}
                        errorMessage={formik.touched.consult && formik.errors.consult}
                        inputProps={{ maxLength: 150 }}>
                    </InputField>

                    <Button type="submit">Envíar consulta</Button>
                    <Alert
                        openAlert={openAlert}
                        setOpenAlert={setOpenAlert}
                        message="Tu consulta se ha enviado correctamente"/>
                </Box>

            </Box>

            <Box
                component="section"
                className="contact__section">
                <h3>Datos de contacto</h3>
                <Box className="contact__section__data">
                    <Box>
                        <PlaceIcon/>
                        <span>Av. Calchaqui 43500, Quilmes, Argentina</span>
                    </Box>
                    <Box>
                        <PhoneIcon/>
                        <span>15351318327</span>
                    </Box>
                    <Box>
                        <MailIcon/>
                        <span>contacto@sebaburger.com</span>
                    </Box>
                </Box>
                <Box className="contact__section__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.6894678074227!2d-58.275355499999996!3d-34.763414499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e9f271e5e43%3A0xad757c0b5a1d9976!2sAv.%20Calchaqu%C3%AD%204350%2C%20Ezpeleta%20Oeste%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1710204688296!5m2!1ses!2sar"
                        loading="lazy">
                    </iframe>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;