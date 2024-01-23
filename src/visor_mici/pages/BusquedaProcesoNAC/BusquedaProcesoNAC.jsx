import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,  
  TableRow,
  TableCell,
  TablePagination,
} from "@mui/material";
import './BusquedaProcesoNAC.css';

export const BusquedaProcesoNAC = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedTrimester, setSelectedTrimester] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedProcessType, setSelectedProcessType] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = () => {
    // Lógica para realizar la búsqueda
    console.log("Realizar búsqueda");
    // Actualizar los resultados de la tabla en función de la búsqueda
  };

  const handleCalculateNAC = () => {
    // Lógica para calcular el NAC
    console.log("Calcular NAC");
  };

  const handleNewSimulation = () => {
    // Lógica para iniciar una nueva simulación
    console.log("Nueva simulación");
  };

  // Resultados simulados para la tabla (puedes reemplazar esto con los datos reales de tu búsqueda)
  const results = [
    { id: 1, name: "Resultado 1", details: "Detalles 1" },
    { id: 2, name: "Resultado 2", details: "Detalles 2" },
    // ... más resultados
  ];

  return (
    <div className="cardContainer">
      <Card className="cardContent">
        <CardHeader title="Búsqueda de Proceso NAC" className="cardHeaderTitle"  />
        <CardContent>
          <Grid container spacing={2}>
            {/* Primera fila */}
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="year-label">Año</InputLabel>
                <Select
                  labelId="year-label"
                  id="year"
                  value={selectedYear}
                  label="Año"
                  className="custom-select"
                  onChange={(e) => setSelectedYear(e.target.value)}
                  
                >
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  {/* Agrega más años según sea necesario */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="trimester-label">Trimestre</InputLabel>
                <Select
                  labelId="trimester-label"
                  id="trimester"
                  value={selectedTrimester}
                  label="Trimestre"
                  onChange={(e) => setSelectedTrimester(e.target.value)}
                >
                  <MenuItem value="Q1">Trimestre 1</MenuItem>
                  <MenuItem value="Q2">Trimestre 2</MenuItem>
                  {/* Agrega más trimestres según sea necesario */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="user-label">Usuario</InputLabel>
                <Select
                  labelId="user-label"
                  id="user"
                  value={selectedUser}
                  label="Usuario"
                  onChange={(e) => setSelectedUser(e.target.value)}
                >
                  <MenuItem value="usuario1">Usuario 1</MenuItem>
                  <MenuItem value="usuario2">Usuario 2</MenuItem>
                  {/* Agrega más usuarios según sea necesario */}
                </Select>
              </FormControl>
            </Grid>

            {/* Segunda fila */}
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="process-type-label">Tipo de Proceso</InputLabel>
                <Select
                  labelId="process-type-label"
                  id="process-type"
                  value={selectedProcessType}
                  label="Tipo de Proceso"
                  onChange={(e) => setSelectedProcessType(e.target.value)}
                >
                  <MenuItem value="proceso1">Proceso 1</MenuItem>
                  <MenuItem value="proceso2">Proceso 2</MenuItem>
                  {/* Agrega más tipos de procesos según sea necesario */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <Button 
                variant="contained" 
                className="btn-buscar" 
                onClick={handleSearch}>
               
                Buscar
              </Button>

            
                <Button onClick={handleSearch} className="btn-buscar" >Haz clic</Button>
              

            </Grid>

            {/* Botones "Calcular NAC" y "Nueva Simulación" más juntos */}
            <Grid item >
              <Button
                variant="text"
                className="btn-proceso-NAC"
                onClick={handleCalculateNAC}
                sx={{
                  borderRadius: 17.2,
                  
                }}
              >
                Calcular NAC
              </Button>
            </Grid>

            <Grid item >
              <Button
                variant="text"
                className="btn-proceso-NAC"
                onClick={handleNewSimulation}
                sx={{
                  borderRadius: 17.2,
                  
                }}
              >
                Nueva Simulación
              </Button>
            </Grid>
          </Grid>

          {/* Tabla de resultados con paginación */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id Proceso</TableCell>
                  <TableCell>Año</TableCell>
                  <TableCell>Trimestre</TableCell>
                  <TableCell>Tipo Proceso</TableCell>
                  <TableCell>Fecha Proceso</TableCell>
                  <TableCell>Propietario Proceso</TableCell>
                  <TableCell>Estado Proceso</TableCell>
                  <TableCell>Ver Detalles</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? results.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : results
                ).map((result) => (
                  <TableRow key={result.id}>
                    <TableCell>{result.id}</TableCell>
                    <TableCell>{result.name}</TableCell>
                    <TableCell>{result.details}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Paginación */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={results.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </CardContent>
      </Card>
    </div>
  );
};
