import React, { useEffect, useState} from 'react';
import {nativeSelect, FormControl, NativeSelect } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';

const CountryPicker = ({handleCountryChange}) => {

    const [ fetchedCountries, setFetchCountries] = useState([]);

    useEffect(()=>{
        const fetchAPI =  async ()=>{
            setFetchCountries(await fetchCountries());

        }

        fetchAPI();
    }, [setFetchCountries]);
    // console.log(fetchedCountries);

    return (
        <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country, i)=><option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>    )
}

export default CountryPicker;