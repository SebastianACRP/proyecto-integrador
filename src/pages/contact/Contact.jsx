import { Box } from "@mui/material";
import "./contact.scss";

import FormContact from "../../components/form/formContact/FormContact.jsx";

import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {
    return (
        <Box className="contact">
            <Box
                component="section"
                className="contact__section">
                <h3>Hace tu consulta</h3>

                <FormContact/>
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