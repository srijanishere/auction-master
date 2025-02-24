import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/joy/Tooltip";
import Button from "@mui/joy/Button";
import Stack from "@mui/material/Stack";

export default function ButtonAppBar({ pos, bgColor }) {
  const [banditsAmount, setBanditsAmount] = useState(10000);
  const [bullsAmount, setBullsAmount] = useState(10000);
  const [cobrasAmount, setCobrasAmount] = useState(10000);
  const [stallionsAmount, setStallionsAmount] = useState(10000);
  const [royalsAmount, setRoyalsAmount] = useState(10000);

  // useEffect hook
  useEffect(() => {
    // fetch credit record for Bandits
    fetch("http://localhost:8080/bcl/credit/get/1")
      .then((response) => response.json())
      .then((response) => {
        setBanditsAmount(response["balance"]);
      });

    // fetch credit record for Big Bulls
    fetch("http://localhost:8080/bcl/credit/get/2")
      .then((response) => response.json())
      .then((response) => {
        setBullsAmount(response["balance"]);
      });

    // fetch credit record for Royals
    fetch("http://localhost:8080/bcl/credit/get/3")
      .then((response) => response.json())
      .then((response) => {
        setRoyalsAmount(response["balance"]);
      });

    // fetch credit record for Cobras
    fetch("http://localhost:8080/bcl/credit/get/4")
      .then((response) => response.json())
      .then((response) => {
        setCobrasAmount(response["balance"]);
      });

    // fetch credit record for Stallions
    fetch("http://localhost:8080/bcl/credit/get/5")
      .then((response) => response.json())
      .then((response) => {
        setStallionsAmount(response["balance"]);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position={pos} style={{ backgroundColor: bgColor }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Stack direction="row" spacing={6}>
              <h3>BCL S-4 AUCTION</h3>
              <Tooltip title="Balance" variant="outlined">
                <Button
                  variant="outlined"
                  style={{ backgroundColor: "white", color: "black", fontSize: "25px"}}
                >
                  BBT : {banditsAmount}
                </Button>
              </Tooltip>
              <Tooltip title="Balance" variant="outlined">
                <Button
                  variant="outlined"
                  style={{ backgroundColor: "white", color: "black", fontSize: "25px" }}
                >
                  BBB : {bullsAmount}
                </Button>
              </Tooltip>
              <Tooltip title="Balance" variant="outlined">
                <Button
                  variant="outlined"
                  style={{ backgroundColor: "white", color: "black", fontSize: "25px" }}
                >
                  BRT : {royalsAmount}
                </Button>
              </Tooltip>
              <Tooltip title="Balance" variant="outlined">
                <Button
                  variant="outlined"
                  style={{ backgroundColor: "white", color: "black", fontSize: "25px" }}
                >
                  BSP : {cobrasAmount}
                </Button>
              </Tooltip>
              <Tooltip title="Balance" variant="outlined">
                <Button
                  variant="outlined"
                  style={{ backgroundColor: "white", color: "black", fontSize: "25px" }}
                >
                  BSS : {stallionsAmount}
                </Button>
              </Tooltip>
            </Stack>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
