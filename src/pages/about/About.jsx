import { Box } from "@mui/material";
import "./about.scss";

const About = () => {
    return (
        <Box className="about">
            <Box
                component="section"
                className="about__section">
                <h3>Misión</h3>
                <img
                    src="images/about/mision3.jpg"
                    alt="Fotrografía de la misión de la empresa"/>
                <p>Nuestra misión es ofrecer experiencias gastronómicas únicas y satisfactorias a nuestros clientes a través de hamburguesas de alta calidad, preparadas con ingredientes frescos y sabrosos. Nos esforzamos por superar las expectativas de nuestros clientes en cada visita, brindando un servicio excepcional y un ambiente acogedor que los haga sentir como en casa.</p>
                <p>Queremos que nuestro dialogo mas fructifero con nuestros clientes sea el feedback recibido por cada hamburguesa que preparamos y brindamos con todo nuestro esfuerzo y dedicacion para dar una experiencia gastronomica premium. Preparamos cada hamburguesa con la dedicacion que se merece.</p>
                <p>Esperamos que el primer contacto con una de nuestras hamburguesas signifique un viaje interno al paladar de los amantes de las hamburguesas y los cautive de tal manera que las quieran compartir con sus seres queridos. La mision principal siempre va a ser que en cada hamburguesa se note el amor que se le pone en su preparacion y que sea una buena experiencia a recordar para que quieran repetirla.</p>
            </Box>

            <Box
                component="section"
                className="about__section about__section--vision">
                <h3>Visión</h3>
                <img
                    src="/images/about/vision.png"
                    alt="Fotrografía de la visión de la empresa"/>
                <p>Nos visualizamos como el destino preferido para los amantes de las hamburguesas, reconocidos por nuestra excelencia culinaria, innovación constante y compromiso con la calidad. Buscamos expandir nuestra presencia a nivel local e internacional, siendo referentes en el sector de la comida rápida por nuestra creatividad, pasión por la cocina y dedicación al cliente.</p>
                <p>Apuntamos a ser reconocidos como el lugar donde compartir una hamburguesa con amigos sea un motivo de reunion semanal y la excusa perfecta para poder compartir algo con esa persona especial. La calidad de las hamburguesas, el servicio brindado y el trato cordial con nuestros clientes es primordial con esto.</p>
                <p>Expandir nuestra marca y nuestro compromiso a lo largo del pais para hacer reconocido nuestro amor por las hamburguesas para que todos puedan disfrutar de nuestra gran variedad de preparaciones.</p>
            </Box>

            <Box
                component="section"
                className="about__section">
                <h3>Valores</h3>
                <img
                    src="/images/about/valores.png"
                    alt="Fotrografía de la valores de la empresa"/>
                <p>Calidad: Nos comprometemos a utilizar los mejores ingredientes y técnicas de preparación para ofrecer hamburguesas que superen las expectativas de nuestros clientes en sabor y frescura.</p>
                <p>Excelencia: Buscamos la perfección en cada aspecto de nuestro negocio, desde la atención al cliente hasta la presentación de nuestros platos, para garantizar una experiencia excepcional en cada visita.</p>
                <p>Creatividad: Fomentamos la innovación en nuestra cocina, desarrollando nuevas recetas y combinaciones de sabores para sorprender y deleitar a nuestros clientes.</p>
                <p>Responsabilidad: Nos preocupamos por el bienestar de nuestros clientes, empleados y comunidad, adoptando prácticas sostenibles y éticas en todas nuestras operaciones.</p>
                <p>Pasión: Nos apasiona la comida y nos esforzamos por transmitir esa pasión en cada hamburguesa que servimos, creando momentos memorables para nuestros clientes.</p>
            </Box>
        </Box>
    );
};

export default About;