import axios from "axios";



import { MAILER_URL } from "../constants/api";



const useMailer = () => {



    const sendConsult = (params) => {



        const { fullname, telephone, email, consult } = params;



        //enviar consulta a store



        sendEmail({



            to: "sebasc.rp@gmail.com",



            subject: "Consulta SebaBurger",



            content: `${fullname}${telephone}${consult}` });



        //Envia mail a usuario



        sendEmail( {



            to: email,



            subject: "Consulta SebaBurger",



            content: "Tu consulta fue recibida!,\nPronto nos estaremos comunicando con vos\n\nSebaBurger" },



        );



    };



    const sendPurchaseConfirmation = (params ) => {



        const { fullname, email } = params;



        //enviar info a store



        sendEmail({



            to: "sebasc.rp@gmail.com",



            subject: "Compra realizada!",



            content: `Nombre: ${fullname}\nE-mail: ${email}` });



        //Envia mail a usuario



        sendEmail( {



            to: email,



            subject: "Confirmación de compra",



            content: `Hola ${fullname} \n



            Gracias por comprar en SebaBurger!` },



        );



    };



    const sendEmail = async(params) => {



        const queryParams = new URLSearchParams(params);



        const url = `${MAILER_URL}?${queryParams}`;



        return await axios.get(url)



            .then((res) => {



                return res.data;



            });



    };



    return {



        sendConsult,



        sendPurchaseConfirmation,



    };



};



export default useMailer;