import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import API from '../../apis/api';
import cityApi from '../../apis/cityApi';
import axios from 'axios';
class Content extends Component {

    state = {
        persons: [],
        cityList: []
    }

    componentDidMount() {
        const cityOption = {
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
            headers: {
                'X-RapidAPI-Key': '5f51a30ce6msha918430614bf997p163518jsn73732ad25a2d',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };
        let config = {
            headers: {
                'X-RapidAPI-Key': '5f51a30ce6msha918430614bf997p163518jsn73732ad25a2d',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        }
        API.get(`cities`, config)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        /*axios.request(cityOption).then(function (response) {
            const cityList = response.data.data;
            this.setState({cityList});
            console.log(cityList);
        }).catch(function (error) {
            console.error(error);
        });*/
    }

    constructor(props) {
        super(props);
        this.submitCity = this.submitCity.bind(this);
    }

    submitCity = event => {
        const weatherOption = {
            method: 'GET',
            url: 'api.openweathermap.org/data/2.5/weather?lat=35.69439000&lon=51.42151000&exclude=current&appid=162cb01c58ab47b7da9889b0836cad03'
        };
        axios.request(weatherOption).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.error(error);
        });
    }

    render() {
        return (
            <div>
                <Stack direction="horizontal" gap={3}>
                    <Container fluid>
                        <div className="justify-content-md-center">
                            <Form noValidate>
                                <Col md="4" lg="4" xs="4" sm="4">
                                    <Form.Group className="mb-3" controlId="city">
                                        <Form.Label>Select City</Form.Label>
                                        <Form.Select placeholder="Select City" aria-label="Please Select City">
                                            {
                                                this.state.cityList
                                                    .map(cityList =>
                                                        <option value="{cityList.id}">{cityList.name}</option>
                                                    )
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md="4" lg="4" xs="4" sm="4">
                                    <Form.Group controlId="date">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control type="date"/>
                                    </Form.Group>
                                </Col>
                                <Col md="4" lg="4" xs="4" sm="4">
                                    <Button variant="primary" onClick={this.sayHello}>
                                        Show Weather
                                    </Button>
                                </Col>

                            </Form>
                        </div>
                    </Container>
                </Stack>

            </div>
        )
    }
}

export default Content;
