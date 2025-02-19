import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar({pos, bgColor, description}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position={pos} style={{backgroundColor:bgColor}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {description}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
