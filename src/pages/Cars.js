import React from "react";
import Navigation from "../component/Navigation";

import Footer from "../component/Footer";
import { Row, Col, Form, Button } from "react-bootstrap";
import { mercy, users, setting, calendar, imgCar } from "../assets";

import { useState, useEffect } from "react";
import axios from "axios";

const Cars = () => {
  const [data, setdata] = useState([]);
  const [capacity, setCapacity] = useState("");
  const [typedriver, setTypedriver] = useState("");

  const getCars = async () => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    );

    setdata(response.data);
  };

  useEffect(() => {
    getCars();
  }, []);
  // useEffect depedency array
  // Kalo array nya kosong, cuman di-fetch sekali pas web nya nge load aja
  // Kalo array nya ada variabel, bakalan nge fetch ulang saat variabel di array tersebut berubah

  const filteredData = capacity
    ? data
        .filter((car) => {
          if (typedriver !== "true") {
            return car.available === false;
          } else {
            return car.available === true;
          }
        })
        .filter((car) => car.capacity >= capacity)
    : data.filter((car) => {
        if (typedriver !== "true") {
          return car.available === false;
        } else {
          return car.available === true;
        }
      });

  return (
    <div>
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
          </div>
          <div className="col  ">
            <img
              src={imgCar}
              alt="Gambar Mobil"
              style={{ right: "-10px" }}
              className="position-relative "
            />
          </div>
        </div>
      </div>
      <div className="form-filter">
        <Row>
          <Col>
            <label>Tipe Driver</label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setTypedriver(e.target.value)}
            >
              <option hidden className="text-secondary">
                Pilih Tipe Driver
              </option>
              <option value={true}>Dengan Sopir</option>
              <option value={false}>Tanpa Sopir (Lepas Kunci)</option>
            </Form.Select>
          </Col>
          <Col>
            <label>Tanggal</label>
            <input
              type="date"
              className="form-control text-secondary"
              id="tanggal"
              placeholder="Pilih Tanggal"
              name="tanggal"
            />
          </Col>
          <Col>
            <label>Waktu Jemput</label>
            <Form.Select aria-label="Default select example">
              <option hidden className="text-secondary">
                Pilih Waktu
              </option>
              <option value="1">08.00 WIB</option>
              <option value="2">09.00 WIB</option>
              <option value="3">10.00 WIB</option>
              <option value="4">11.00 WIB</option>
              <option value="5">12.00 WIB</option>
            </Form.Select>
          </Col>
          <Col>
            <label>Jumlah Penumpang (optional)</label>
            <input
              type="text"
              className="form-control text-secondary"
              placeholder="Jumlah Penumpang"
              onChange={(e) => setCapacity(e.target.value)}
            />
          </Col>
        </Row>
      </div>
      <div
        className="container-fluid"
        style={{ padding: "0px 10% 100px 10% " }}
      >
        <Row className="">
          {typedriver === ""
            ? data.map((car) => (
                <Col key={car.id}>
                  <div
                    className="card mb-3"
                    style={{ width: "357px", height: "580px" }}
                  >
                    <img
                      src={car.image.replace("./", "")}
                      className="card-img-top"
                      alt="..."
                      style={{
                        objectFit: "cover",
                        width: "355.59px",
                        height: "222px",
                      }}
                    />
                    <div className="card-body" style={{ height: "100%" }}>
                      <p className="text-car-tittle">
                        {car.manufacture}/ {car.model}
                      </p>
                      <p className="text-card">Rp {car.rentPerDay}/hari</p>
                      <p className="text-description">{car.description}</p>
                      <ul className="list-unstyled text-description">
                        <li className="mb-3">
                          <img src={users} /> {car.capacity}
                        </li>
                        <li className="mb-3">
                          <img src={setting} /> {car.transmission}
                        </li>
                        <li className="mb-3">
                          <img src={calendar} /> {car.year}
                        </li>
                      </ul>
                      <Button
                        className="border-0   align-items-end"
                        style={{
                          backgroundColor: "#5CB85F",
                          width: "100%",
                        }}
                        href="/cars"
                      >
                        Pilih Mobil
                      </Button>
                    </div>
                  </div>
                </Col>
              ))
            : filteredData.map((car) => (
                <Col key={car.id} className="align-items-center">
                  <div
                    className="card mb-3"
                    style={{ width: "333px", height: "586px" }}
                  >
                    <img src={mercy} className="card-img-top" alt="..." />
                    <div className="card-body" style={{ height: "100%" }}>
                      <p className="text-car-tittle">
                        {car.manufacture}/ {car.model}
                      </p>
                      <p className="text-card">Rp {car.rentPerDay}/hari</p>
                      <p className="text-description">{car.description}</p>
                      <ul className="list-unstyled text-description">
                        <li className="mb-3">
                          <img src={users} /> {car.capacity}
                        </li>
                        <li className="mb-3">
                          <img src={setting} /> {car.transmission}
                        </li>
                        <li className="mb-3">
                          <img src={calendar} /> {car.year}
                        </li>
                      </ul>
                      <Button
                        className="border-0 align-bottom"
                        style={{
                          backgroundColor: "#5CB85F",
                          marginTop: "50px",
                          width: "100%",
                        }}
                        href="/cars"
                      >
                        Pilih Mobil
                      </Button>
                    </div>
                  </div>
                </Col>
              ))}
        </Row>
      </div>
      ;
      <Footer />
    </div>
  );
};

export default Cars;
