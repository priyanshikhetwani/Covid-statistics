import React from "react";
import { Cards, Charts, CountryPicker, States } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";
// import styles from "App.module.css";
import coronaimage from "./images/covid19.png";
import { blue } from "@material-ui/core/colors";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    console.log(fetchedData);
    // console.log(country);
    //fetch the data
    //set the state
  };

  render() {
    const { data, country } = this.state;
    return (
      <div style={{ backgroundColor: "#add8e6" }}>
        <div className={styles.container}>
          <img className={styles.image} src={coronaimage} alt="CORONA-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Charts data={data} country={country} />
          <h1 className={styles.h1}>States Data</h1>
          <States data={data} />
        </div>
      </div>
    );
  }
}

export default App;
