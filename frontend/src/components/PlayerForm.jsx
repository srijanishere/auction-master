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
import Tooltip from "@mui/joy/Tooltip";

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
  const [bulls, setBulls] = useState([]);
  const [cobras, setCobras] = useState([]);
  const [stallions, setStallions] = useState([]);
  const [royals, setRoyals] = useState([]);
  const [banditsAmount, setBanditsAmount] = useState(0);
  const [bullsAmount, setBullsAmount] = useState(0);
  const [cobrasAmount, setCobrasAmount] = useState(0);
  const [stallionsAmount, setStallionsAmount] = useState(0);
  const [royalsAmount, setRoyalsAmount] = useState(0);
  const [amount, setAmount] = useState(0);

  // useEffect hook
  useEffect(() => {
    // fetch all Bandits players
    fetch("http://localhost:8080/bcl/bandits/getAll")
      .then((response) => response.json())
      .then((response) => {
        setBandits(response);
      });

    // fetch all Bulls players
    fetch("http://localhost:8080/bcl/bulls/getAll")
      .then((response) => response.json())
      .then((response) => {
        setBulls(response);
      });

    // fetch all Cobras players
    fetch("http://localhost:8080/bcl/cobras/getAll")
      .then((response) => response.json())
      .then((response) => {
        setCobras(response);
      });

    // fetch all Stallions players
    fetch("http://localhost:8080/bcl/stallions/getAll")
      .then((response) => response.json())
      .then((response) => {
        setStallions(response);
      });

    // fetch all Royals players
    fetch("http://localhost:8080/bcl/royals/getAll")
      .then((response) => response.json())
      .then((response) => {
        setRoyals(response);
      });

    // fetch credit record for Bandits
    fetch("http://localhost:8080/bcl/credit/get/1")
      .then((response) => response.json())
      .then((response) => {
        setBanditsAmount(response["balance"])
      })

    // fetch credit record for Big Bulls
    fetch("http://localhost:8080/bcl/credit/get/2")
      .then((response) => response.json())
      .then((response) => {
        setBullsAmount(response["balance"])
      })

    // fetch credit record for Royals
    fetch("http://localhost:8080/bcl/credit/get/3")
      .then((response) => response.json())
      .then((response) => {
        setRoyalsAmount(response["balance"])
      })

    // fetch credit record for Cobras
    fetch("http://localhost:8080/bcl/credit/get/4")
      .then((response) => response.json())
      .then((response) => {
        setCobrasAmount(response["balance"])
      })

    // fetch credit record for Stallions
    fetch("http://localhost:8080/bcl/credit/get/5")
      .then((response) => response.json())
      .then((response) => {
        setStallionsAmount(response["balance"])
      })

  }, []);

  // function to handle button click and add a player
  const addPlayer = (e) => {
    e.preventDefault();
    const player = { name, role };
    console.log(player);
    if (team === 1) {
      // adding the player
      fetch("http://localhost:8080/bcl/bandits/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      }).then(() => {
        alert("Player added successfully!");
        location.reload();
      });
      // updating the team credit balance
      let balance = banditsAmount - amount;
      fetch(`http://localhost:8080/bcl/credit/update/${balance}/${team}`, {
        method: "PUT"
      }).then(() => {
        location.reload();
      })

    } else if (team === 2) {
      // adding the player
      fetch("http://localhost:8080/bcl/bulls/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      }).then(() => {
        alert("Player added successfully!");
        location.reload();
      });
      // updating the team credit balance
      let balance = bullsAmount - amount;
      fetch(`http://localhost:8080/bcl/credit/update/${balance}/${team}`, {
        method: "PUT"
      }).then(() => {
        location.reload();
      })
    } else if (team === 3) {
      // adding a player
      fetch("http://localhost:8080/bcl/royals/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      }).then(() => {
        alert("Player added successfully!");
        location.reload();
      });
      // updating the team credit balance
      let balance = royalsAmount - amount;
      fetch(`http://localhost:8080/bcl/credit/update/${balance}/${team}`, {
        method: "PUT"
      }).then(() => {
        location.reload();
      })
    } else if (team === 4) {
      // adding a player
      fetch("http://localhost:8080/bcl/cobras/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      }).then(() => {
        alert("Player added successfully!");
        location.reload();
      });
      // updating the team credit balance
      let balance = cobrasAmount - amount;
      fetch(`http://localhost:8080/bcl/credit/update/${balance}/${team}`, {
        method: "PUT"
      }).then(() => {
        location.reload();
      })
    } else if (team === 5) {
      // adding a player
      fetch("http://localhost:8080/bcl/stallions/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      }).then(() => {
        alert("Player added successfully!");
      });
      // updating the team credit balance
      let balance = stallionsAmount - amount;
      fetch(`http://localhost:8080/bcl/credit/update/${balance}/${team}`, {
        method: "PUT"
      }).then(() => {
        location.reload();
      })
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
                      <Button
                        variant="plain"
                        style={{
                          fontWeight: "bolder",
                          fontSize: "20px",
                          color: "red",
                        }}
                      >
                        Total : {banditsAmount}
                      </Button>
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
                  <TableBody>
                    {bandits.map((bandit) => (
                      <TableRow
                        key={bandit.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {bandit.name}
                        </TableCell>
                        <TableCell align="right">{bandit.role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TableContainer component={Paper}>
                <h4>Benrec Big Bulls</h4>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <caption>
                    <Tooltip title="Amount remaining" variant="plain">
                      <Button
                        variant="plain"
                        style={{
                          fontWeight: "bolder",
                          fontSize: "20px",
                          color: "red",
                        }}
                      >
                        Total : {bullsAmount}
                      </Button>
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
                  <TableBody>
                    {bulls.map((bull) => (
                      <TableRow
                        key={bull.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {bull.name}
                        </TableCell>
                        <TableCell align="right">{bull.role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
            <Stack direction="row" spacing={2}>
              <TableContainer component={Paper}>
                <h4>Benrec Royals</h4>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <caption>
                    <Tooltip title="Amount remaining" variant="plain">
                      <Button
                        variant="plain"
                        style={{
                          fontWeight: "bolder",
                          fontSize: "20px",
                          color: "red",
                        }}
                      >
                        Total : {royalsAmount}
                      </Button>
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
                  <TableBody>
                    {royals.map((royal) => (
                      <TableRow
                        key={royal.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {royal.name}
                        </TableCell>
                        <TableCell align="right">{royal.role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TableContainer component={Paper}>
                <h4>Benrec Spitting Cobras</h4>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <caption>
                    <Tooltip title="Amount remaining" variant="plain">
                      <Button
                        variant="plain"
                        style={{
                          fontWeight: "bolder",
                          fontSize: "20px",
                          color: "red",
                        }}
                      >
                        Total : {cobrasAmount}
                      </Button>
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
                  <TableBody>
                    {cobras.map((cobra) => (
                      <TableRow
                        key={cobra.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {cobra.name}
                        </TableCell>
                        <TableCell align="right">{cobra.role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
            <TableContainer component={Paper}>
              <h4>Benrec Stallion</h4>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <caption>
                  <Tooltip title="Amount remaining" variant="plain">
                    <Button
                      variant="plain"
                      style={{
                        fontWeight: "bolder",
                        fontSize: "20px",
                        color: "red",
                      }}
                    >
                      Total : {stallionsAmount}
                    </Button>
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
                <TableBody>
                  {stallions.map((stallion) => (
                    <TableRow
                      key={stallion.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {stallion.name}
                      </TableCell>
                      <TableCell align="right">{stallion.role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
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
