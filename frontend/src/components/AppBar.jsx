import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/joy/Tooltip";
import Button from "@mui/joy/Button";
import Stack from "@mui/material/Stack";

export default function ButtonAppBar({ pos, bgColor }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position={pos} style={{ backgroundColor: bgColor }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Stack direction="row" spacing={10}>
                <h4>BCL S-4 AUCTION</h4>
              <Tooltip title="Balance" variant="outlined">
                <Button
                  variant="outlined"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  Outlined
                </Button>
              </Tooltip>
              <Tooltip title="Balance" variant="outlined">
                <Button
                  variant="outlined"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  Outlined
                </Button>
              </Tooltip>
              <Tooltip title="Balance" variant="outlined">
                <Button
                  variant="outlined"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  Outlined
                </Button>
              </Tooltip>
              <Tooltip title="Balance" variant="outlined">
                <Button
                  variant="outlined"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  Outlined
                </Button>
              </Tooltip>
              <Tooltip title="Balance" variant="outlined">
                <Button
                  variant="outlined"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  Outlined
                </Button>
              </Tooltip>
            </Stack>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
