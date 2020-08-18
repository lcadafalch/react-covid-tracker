import React from 'react';

import { Cards, Chart, CountryPicker,Table } from './components';
import styles from './App.module.css';
import { fechData } from './api'
import coronaImage from './image/covid.png'

class App extends React.Component {

    state = {

        data: {},
        country: '',
    }


    async componentDidMount() {
        const fechedData = await fechData();

        this.setState({ data: fechedData })

    }
    handleCountryChange = async (country) => {

        const fetchedData = await fechData(country);

        this.setState({data:fetchedData, country:country})

        console.log(country)

    }
    render() {
        const { data ,country} = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="covid" />
                {/* <h4>DATOS:</h4> */}
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
                <h2>Fases desescalada España:</h2>
                <Table/>

            </div>
        )
    }
}

export default App;
