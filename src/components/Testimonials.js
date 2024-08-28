import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

function Testimonials() {

  return (
    <Container fluid style={{ backgroundColor: "#495E57", height: "600px" }}>
      <Row style={{ marginLeft: "30px", marginRight: "30px", marginTop: "8%" }}>
        <div style={{ textAlign: "center", color: "#FFF" }}>
          <h2 style={{ marginTop: "3%", color: "#FFF" }}>Testimonials</h2>
          <h5 style={{ marginTop: "10px", color: "#FFF" }}>
            See what people are saying
          </h5>
        </div>
      </Row>
      <Row style={{ marginTop: "5%" }}>
      <Carousel fade>
        <Carousel.Item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            marginBottom: "50px",
          }}
        >
          <div style={{ maxWidth: "80%" }}>
            <Card
              className="text-center"
              style={{ backgroundColor: "#F4CE14" }}
            >
              <Card.Body className="d-flex align-items-center justify-content-center">
                <Image
                  src="/images/testimonials/brooke-cagle-R8bNESnnKR8-unsplash.jpg"
                  roundedCircle
                  style={{
                    width: "200px",
                    height: "auto",
                    marginRight: "20px",
                  }}
                />
                <blockquote className="blockquote" style={{ textAlign: "left" }}>
                  <p style={{ color: "#000" }}>
                    "Little Lemon é uma verdadeira joia em São Paulo. O ambiente
                    é acolhedor e sofisticado, e a comida é simplesmente divina.
                    Experimentei o risoto de frutos do mar, que estava perfeito.
                    A equipe é atenciosa e faz de tudo para que a experiência
                    seja memorável. Recomendo fortemente para quem busca uma
                    refeição excepcional."
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>

        <Carousel.Item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            marginBottom: "50px",
          }}
        >
          <div style={{ maxWidth: "80%" }}>
            <Card
              className="text-center"
              style={{ backgroundColor: "#F4CE14" }}
            >
              <Card.Body className="d-flex align-items-center justify-content-center">
                <Image
                  src="/images/testimonials/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
                  roundedCircle
                  style={{
                    width: "200px",
                    height: "auto",
                    marginRight: "20px",
                  }}
                />
                <blockquote className="blockquote" style={{ textAlign: "left" }}>
                  <p style={{ color: "#000" }}>
                    "A experiência no Little Lemon foi simplesmente fantástica. Desde o momento 
                    em que entrei, fui recebido com um sorriso caloroso e uma atmosfera aconchegante. 
                    O menu é variado e atende a todos os gostos, mas o destaque foi definitivamente o 
                    risoto de cogumelos que provei. A textura era perfeita e o sabor, divino. Além disso, 
                    o atendimento foi impecável, com a equipe sempre atenta e prestativa. Saí de lá com a 
                    certeza de que voltarei muitas vezes para saborear outras delícias."
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>

        <Carousel.Item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div style={{ maxWidth: "80%" }}>
            <Card
              className="text-center"
              style={{ backgroundColor: "#F4CE14" }}
            >
              <Card.Body className="d-flex align-items-center justify-content-center">
                <Image
                  src="/images/testimonials/matheus-ferrero-4QotHf68gSg-unsplash.jpg"
                  roundedCircle
                  style={{
                    width: "200px",
                    height: "auto",
                    marginRight: "20px",
                  }}
                />
                <blockquote className="blockquote" style={{ textAlign: "left" }}>
                  <p style={{ color: "#000"}}>
                    "Visitar o Little Lemon foi uma das melhores decisões que tomei em São Paulo. 
                    O ambiente é sofisticado e acolhedor, proporcionando uma experiência gastronômica 
                    única. Provei o filé mignon ao molho de vinho e fiquei impressionado com a 
                    qualidade e a apresentação do prato. A sobremesa, um tiramisu, estava igualmente 
                    deliciosa. O serviço foi excepcional, com os garçons demonstrando conhecimento e 
                    simpatia. Recomendo o Little Lemon a todos que buscam uma experiência culinária 
                    de alto nível."
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
      </Carousel>
      </Row>
      
    </Container>
  );
}

export default Testimonials;
