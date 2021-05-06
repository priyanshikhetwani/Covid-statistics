import axios from 'axios';

 const url = 'https://covid19.mathdro.id/api';
 const dailyurl = "https://covid19.mathdro.id/api/daily";
 const countryurl = "https://covid19.mathdro.id/api/countries";
 const statesurl = "https://api.covid19india.org/data.json";

 export const fetchData = async(country)=>{
     let changableurl = url;

     if(country){
        // changableurl= '${url}/countries/${country}';
        changableurl = countryurl +'/'+ country;
     }
    try{
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changableurl);
        return  { confirmed,recovered,deaths,lastUpdate };
        
    } catch(error){
        console.log(error);
    }
 }


 export const fetchDailyData = async () => {
     try {
         const {data} = await axios.get(dailyurl);
         const modifiedData = data.map((dailyData=>({
             confirmed: dailyData.confirmed.total,
             deaths: dailyData.deaths.total,
             date: dailyData.reportDate,
         })))
         return modifiedData;
        //  console.log(data);
     } catch (error) {
         console.log(error);
     }
 }

 export const fetchCountries = async () => {
     try {
         const {data: {countries}} = await axios.get(countryurl);
         return countries.map((country)=> country.name);

     } catch (error) {
         console.log(error);
     }
 }


 export const fetchStates = async ()=>{
     try{
         const {data} = await axios.get(statesurl);
          const states = data.statewise;
        //  const modifiedData = data.map((stateData => ({
        //     active: stateData.active,
        //     confirmed: stateData.confirmed,
        //     deaths: stateData.deaths,
        //     deltaconfirmed: stateData.deltaconfirmed,
        //     deltadeaths: stateData.deltadeaths,
        //     recovered: stateData.recovered,
        //     deltarecovered: stateData.deltarecovered,
        //     state: stateData.state,
        //     lastupdatedtime: stateData.lastupdatedtime
        
        //  })))
        console.log(states);
         return states;
     }catch(error){
         console.log(error);
     }
 }