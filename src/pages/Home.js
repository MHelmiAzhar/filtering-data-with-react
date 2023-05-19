import Navigation from "../component/Navigation";
import React from "react";
import Footer from "../component/Footer";
import { Container, Col, Row, Card, Button, Accordion } from "react-bootstrap";
import {
  imgServices,
  checkIcon,
  iconComplete,
  icon24hrs,
  iconPrice,
  iconProfessional,
  imgCar,
  foto1,
  rate,
} from "../assets";
// import "owl.carousel/dist/assets/owl.carousel.min.css";
// import "owl.carousel/dist/assets/owl.theme.default.min.css";
// import OwlCarousel from "react-owl-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "430px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
  };
  return (
    <>
      <Navigation />
      <div className="container-fluid pt-4" id="jumbotron">
        <div className="row">
          <div className="col" style={{ padding: "100px 5% 0 7%" }}>
            <p className="text-tittle">
              Sewa & Rental Mobil Terbaik di kawasan Jakarta
            </p>
            <p className="text-description">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Button
              className="border-0"
              style={{ backgroundColor: "#5CB85F" }}
              href="/cars"
            >
              Mulai sewa Mobil
            </Button>
          </div>
          <div className="col  ">
            <img
              src={imgCar}
              alt="Gambar Mobil"
              style={{ right: "-10px" }}
              className="position-relative  "
            />
          </div>
        </div>
      </div>
      <Container style={{ marginTop: "100px" }} id="our-services">
        <Row>
          <Col style={{ paddingLeft: "8%" }}>
            <img src={imgServices} alt="gambar services" />
          </Col>
          <Col style={{ paddingTop: "50px" }}>
            <p className="text-sub-tittle">
              Best Car Rental for any kind of trip in Jakarta!
            </p>
            <p className="text-description">
              Sewa mobil di Jakarta bersama Binar Car Rental jaminan harga lebih
              murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
              pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
              meeting, dll.
            </p>
            <ul className="list-unstyled text-description ">
              <li className="mb-3 ">
                <img src={checkIcon} alt="icon cek" className="pe-3" />
                Sewa Mobil Dengan Supir di Jakarta 12 Jam
              </li>
              <li className="mb-3 ">
                <img src={checkIcon} alt="icon cek" className="pe-3" />
                Sewa Mobil Lepas Kunci di Jakarta 24 Jam
              </li>
              <li className="mb-3 ">
                <img src={checkIcon} alt="icon cek" className="pe-3" />
                Sewa Mobil Jangka Panjang Bulanan
              </li>
              <li className="mb-3">
                <img src={checkIcon} alt="icon cek" className="pe-3" />
                Gratis Antar - Jemput Mobil di Bandara
              </li>
              <li>
                <img src={checkIcon} alt="icon cek" className="pe-3" />
                Layanan Airport Transfer / Drop In Out
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "100px" }} id="why-us">
        <p className="text-sub-tittle">Why Us?</p>
        <p className="text-description">
          Mengapa harus pilih Binar Car Rental?
        </p>

        <div>
          <Row>
            <Col>
              <Card style={{ width: "268px" }}>
                <Card.Body>
                  <Card.Title>
                    <img src={iconComplete} />
                  </Card.Title>
                  <Card.Subtitle className="text-card mt-3 mb-3">
                    Mobil Lengkap
                  </Card.Subtitle>
                  <Card.Text className="text-description">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "268px" }}>
                <Card.Body>
                  <Card.Title>
                    <img src={iconPrice} />
                  </Card.Title>
                  <Card.Subtitle className="text-card mt-3 mb-3">
                    Harga Murah
                  </Card.Subtitle>
                  <Card.Text className="text-description">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "268px" }}>
                <Card.Body>
                  <Card.Title>
                    <img src={icon24hrs} />
                  </Card.Title>
                  <Card.Subtitle className="text-card mt-3 mb-3">
                    Layanan 24 Jam
                  </Card.Subtitle>
                  <Card.Text className="text-description">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "268px" }}>
                <Card.Body>
                  <Card.Title>
                    <img src={iconProfessional} />
                  </Card.Title>
                  <Card.Subtitle className="text-card mt-3 mb-3">
                    Sopir Professional
                  </Card.Subtitle>
                  <Card.Text className="text-description">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      <div
        id="testimonial"
        style={{ marginTop: "100px" }}
        className="container-fluid"
      >
        <div className="text-center">
          <p className="text-sub-tittle">Testimonial</p>
          <p className="text-description">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>

        <div>
          <Slider {...settings}>
            <div>
              <div
                className="card mb-3 border-0"
                style={{ maxWidth: "619px", backgroundColor: "#F1F3FF" }}
              >
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img
                      src={foto1}
                      className="img-fluid rounded-start"
                      alt="foto"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <img
                        src={rate}
                        className="img-fluid rounded-start"
                        alt="foto"
                      />
                      <p className="text-description mt-3">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p className="text-car-tittle">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="card mb-3 border-0"
                style={{ maxWidth: "619px", backgroundColor: "#F1F3FF" }}
              >
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img
                      src={foto1}
                      className="img-fluid rounded-start"
                      alt="foto"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <img
                        src={rate}
                        className="img-fluid rounded-start"
                        alt="foto"
                      />
                      <p className="text-description mt-3">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p className="text-car-tittle">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="card mb-3 border-0"
                style={{ maxWidth: "619px", backgroundColor: "#F1F3FF" }}
              >
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img
                      src={foto1}
                      className="img-fluid rounded-start"
                      alt="foto"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <img
                        src={rate}
                        className="img-fluid rounded-start"
                        alt="foto"
                      />
                      <p className="text-description mt-3">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p className="text-car-tittle">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <Container
        className="text-center text-light p-5 rounded"
        style={{ backgroundColor: "#0D28A6", marginTop: "100px" }}
      >
        <p className=" text-tittle">Sewa Mobil di Jakarta Sekarang</p>
        <p className=" text-description" style={{ padding: "0px 30% 0 30%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>

        <Button
          className="border-0"
          style={{ backgroundColor: "#5CB85F", marginTop: "50px" }}
          href="/cars"
        >
          Mulai sewa Mobil
        </Button>
      </Container>

      <Container id="faq" style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Row>
          <Col lg={5}>
            <p className="text-sub-tittle">Frequently Asked Question</p>
            <p className="text-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </Col>
          <Col lg={7}>
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0" className="mb-3">
                <Accordion.Header>
                  Apa saja syarat yang dibutuhkan
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mb-3 border-top ">
                <Accordion.Header>
                  Berapa hari minimal sewa mobil lepas kunci?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="mb-3 border-top">
                <Accordion.Header>
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="mb-3 border-top">
                <Accordion.Header>
                  Apakah Ada biaya antar-jemput?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="border-top">
                <Accordion.Header>
                  Bagaimana jika terjadi kecelakaan?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
