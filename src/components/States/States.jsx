import React, { useEffect, useState } from "react";
import { fetchStates } from "../../api";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  Grid,
  Paper,
  TableContainer,
} from "@material-ui/core";

import styles from "./States.module.css";

const States = ({ data }) => {
  const [statesData, setStatesData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setStatesData(await fetchStates());
    };

    fetchAPI();
  }, [setStatesData]);
  console.log(statesData);
  // console.log(active);
  // {fetchedCountries.map((country, i)=><option value={country} key={i}>{country}</option>)}
  //     {statesData.map((state ,i)=><td key={i}>{state.state}</td>)}
  return (
    <div className="table-responsive m-2">
      {/* <Grid item xs={12}></Grid> */}
      {/* <h1 className={styles.h1}>States Data</h1> */}
      <TableContainer component={Paper} className={styles.tablecontainer}>
        <Table className="table-responsive">
          <TableHead className={styles.th} component="th">
            <TableRow className={styles.tr}>
              <TableCell className={styles.td}>State</TableCell>
              <TableCell className={styles.td}>Active</TableCell>
              <TableCell className={styles.td}>Infected</TableCell>
              <TableCell className={styles.td}>Recovered</TableCell>
              <TableCell className={styles.td}>Deaths</TableCell>
              <TableCell className={styles.td}>Infected today</TableCell>
              <TableCell className={styles.td}>Recovered today</TableCell>
              <TableCell className={styles.td}>Deaths today</TableCell>
              <TableCell className={styles.td}>Last updated time</TableCell>
            </TableRow>
          </TableHead>

          {statesData.map((states, i) => (
            <TableRow className={styles.tr}>
              <TableCell className={styles.td} className={styles.state} key={i}>
                {states.state}
              </TableCell>
              <TableCell className={styles.td} className={styles.active}>
                {states.active}
              </TableCell>
              <TableCell className={styles.td} className={styles.confirmed}>
                {states.confirmed}
              </TableCell>
              <TableCell className={styles.td} className={styles.recovered}>
                {states.recovered}
              </TableCell>
              <TableCell className={styles.td} className={styles.deaths}>
                {states.deaths}
              </TableCell>
              <TableCell className={styles.td} className={styles.confirmed}>
                {states.deltaconfirmed}
              </TableCell>
              <TableCell className={styles.td} className={styles.recovered}>
                {states.deltarecovered}
              </TableCell>
              <TableCell className={styles.td} className={styles.deaths}>
                {states.deltadeaths}
              </TableCell>
              <TableCell className={styles.td}>
                {states.lastupdatedtime}
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
};

export default States;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {

//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
