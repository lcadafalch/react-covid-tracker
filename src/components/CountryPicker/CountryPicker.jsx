import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, StylesProvider } from '@material-ui/core'

import{fechCountries} from '../../api';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFechedCoutries]=useState([]);

    useEffect(()=>{
        const fechAPI = async() =>{
            setFechedCoutries(await fechCountries());

        }
        fechAPI();
    },[setFechedCoutries])


    return (
        <FormControl className={StylesProvider.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country, i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;