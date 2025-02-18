import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Tooltip from '@mui/joy/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
export default function AccordionUsage() {
  const classes = useStyles();

  // useState hook
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [team, setTeam] = useState(0);
  const [bandits, setBandits] = useState([]);
  const [bull, setBulls] = useState([]);
  const [cobras, setCobras] = useState([]);
  const [stallions, setStallions] = useState([]);
  const [royals, setRoyals] = useState([]);
  const [banditsAmount, setBanditsAmount] = useState(10000);
  const [bullsAmount, setBullsAmount] = useState(10000);
  const [cobrasAmount, setCobrasAmount] = useState(10000);
  const [stallionsAmount, setStallionsAmount] = useState(10000);
  const [royalsAmount, setRoyalsAmount] = useState(10000);
  const [amount, setAmount] = useState(0);


  // function to handle button click and add a player
  const addPlayer = (e) => {
    e.preventDefault();
    const player = { name, role };
    console.log(player);
    if (team === 1) {
      fetch("http://localhost:8080/bcl/bandits/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      }).then(() => {
        alert("Player added successfully!");
      });
      setBanditsAmount(banditsAmount - amount);
    } else if (team === 2) {
      fetch("http://localhost:8080/bcl/bulls/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      }).then(() => {
        alert("Player added successfully!");
      });
      setBullsAmount(bullsAmount - amount);
    } else if (team === 3) {
      fetch("http://localhost:8080/bcl/royals/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      }).then(() => {
        alert("Player added successfully!");
      });
      setRoyalsAmount(royalsAmount - amount);
    } else if (team === 4) {
      fetch("http://localhost:8080/bcl/cobras/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      }).then(() => {
        alert("Player added successfully!");
      });
      setCobrasAmount(cobrasAmount - amount);
    } else if (team === 5) {
      fetch("http://localhost:8080/bcl/stallions/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      }).then(() => {
        alert("Player added successfully!");
      });
      setStallionsAmount(stallionsAmount - amount);
    } else {
      alert("Invalid team choice!");
    }
  };

  // function to handle a button click for clearing the form fields
  const clearForm = () => {
    document.getElementById("player-form").reset();
  };

  return (
    <div style={{ margin: "15px", padding: "5px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">
            <h3>Add a player</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container style={{ color: "white" }}>
            <form
              className={classes.root}
              id="player-form"
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Player Name"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Player Role"
                variant="outlined"
                onChange={(e) => setRole(e.target.value)}
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Player Amount"
                variant="outlined"
                onChange={(e) => setAmount(Number(e.target.value))}
                fullWidth
              />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => setTeam(e.target.value)}
                fullWidth
              >
                <MenuItem value={1}>Benrec Bandits</MenuItem>
                <MenuItem value={2}>Benrec Big Bulls</MenuItem>
                <MenuItem value={3}>Benrec Royals</MenuItem>
                <MenuItem value={4}>Benrec Spitting Cobras</MenuItem>
                <MenuItem value={5}>Benrec Stallions</MenuItem>
              </Select>
            </form>
          </Container>
        </AccordionDetails>
        <AccordionActions>
          <Button
            style={{ margin: "10px", padding: "5px" }}
            variant="contained"
            onClick={clearForm}
          >
            CLEAR
          </Button>
          <Button
            style={{ margin: "10px", padding: "5px" }}
            variant="contained"
            onClick={addPlayer}
          >
            ADD
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">
            <h3>Auction Sheet</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={5} useFlexGap>
            <Stack direction="row" spacing={2}>
              <TableContainer component={Paper}>
                <h4>Benrec Bandits</h4>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <caption>
                    <Tooltip title="Amount remaining" variant="plain">
                      <Button variant="plain" style={{fontWeight:'bolder',fontSize:'20px', color:'red'}}>Total : {banditsAmount}</Button>
                    </Tooltip>
                  </caption>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: "bolder" }}>
                        Player
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bolder" }}>
                        Role
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer>
              <TableContainer component={Paper}>
                <h4>Benrec Big Bulls</h4>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <caption>
                    <Tooltip title="Amount remaining" variant="plain">
                      <Button variant="plain" style={{fontWeight:'bolder',fontSize:'20px', color:'red'}}>Total : {bullsAmount}</Button>
                    </Tooltip>
                  </caption>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: "bolder" }}>
                        Player
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bolder" }}>
                        Role
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer>
            </Stack>
            <Stack direction="row" spacing={2}>
              <TableContainer component={Paper}>
                <h4>Benrec Royals</h4>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <caption>
                    <Tooltip title="Amount remaining" variant="plain">
                      <Button variant="plain" style={{fontWeight:'bolder',fontSize:'20px', color:'red'}}>Total : {royalsAmount}</Button>
                    </Tooltip>
                  </caption>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: "bolder" }}>
                        Player
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bolder" }}>
                        Role
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer>
              <TableContainer component={Paper}>
                <h4>Benrec Spitting Cobras</h4>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <caption>
                    <Tooltip title="Amount remaining" variant="plain">
                      <Button variant="plain" style={{fontWeight:'bolder',fontSize:'20px', color:'red'}}>Total : {cobrasAmount}</Button>
                    </Tooltip>
                  </caption>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: "bolder" }}>
                        Player
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: "bolder" }}>
                        Role
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer>
            </Stack>
            <TableContainer component={Paper}>
              <h4>Benrec Stallion</h4>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <caption>
                    <Tooltip title="Amount remaining" variant="plain">
                      <Button variant="plain" style={{fontWeight:'bolder',fontSize:'20px', color:'red'}}>Total : {stallionsAmount}</Button>
                    </Tooltip>
                  </caption>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bolder" }}>Player</TableCell>
                    <TableCell align="right" style={{ fontWeight: "bolder" }}>
                      Role
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody></TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </AccordionDetails>
        <AccordionActions>
          <Button
            style={{ margin: "10px", padding: "5px" }}
            variant="contained"
          >
            END AUCTION
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
