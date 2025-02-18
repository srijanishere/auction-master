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
  const [players, setPlayers] = useState([]);

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
    } else if (team === 2) {
      fetch("http://localhost:8080/bcl/bulls/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      }).then(() => {
        alert("Player added successfully!");
      });
    } else if (team === 3) {
      fetch("http://localhost:8080/bcl/royals/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      }).then(() => {
        alert("Player added successfully!");
      });
    } else if (team === 4) {
      fetch("http://localhost:8080/bcl/cobras/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      }).then(() => {
        alert("Player added successfully!");
      });
    } else if (team === 5) {
      fetch("http://localhost:8080/bcl/stallions/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      }).then(() => {
        alert("Player added successfully!");
      });
    }
    else
    {
        alert("Invalid team choice!");
    }
  };

  // function to handle a button click for clearing the form fields
  const clearForm = () => {
    document.getElementById("player-form").reset();
  }

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
            <form className={classes.root} id="player-form" noValidate autoComplete="off">
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
    </div>
  );
}
