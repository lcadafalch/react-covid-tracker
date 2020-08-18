import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
 import styles from './Table.module.css'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('COMERCIO', "Sólo esenciales", "Con restricciones", "al 40%", "al 50%"),
  createData('CULTO', "No", "al 30%", "al 40%", "al 50%"),
  createData('TURISMO', "No","No", "En región sanitaria", "Aún por decidir"),
  createData('TRANSPORTE', "Sólo esencial", "En región sanitaria", "En región sanitaria","Aún por decidir"),
  createData('RESTAURACIÓN', "Recogida Comida", "50%(terraza)", "40% interior + terraza","más relajado"),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div className={styles.container}>

    <TableContainer  component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right"><strong>Fase 0</strong></TableCell>
            <TableCell align="right"><strong>Fase 1</strong></TableCell>
            <TableCell align="right"><strong>Fase 2</strong></TableCell>
            <TableCell align="right"><strong>Fase 3</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
