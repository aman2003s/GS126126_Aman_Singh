import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StoreIcon from "@mui/icons-material/Store";
import CategoryIcon from "@mui/icons-material/Category";
import InsightsIcon from "@mui/icons-material/Insights";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import Header from "./Header";
import AgChart from "./AgChart";
import React from "react";

const drawerWidth = 240;

export default function ClippedDrawer() {
  const drawerMenuItems: string[] = ["Store", "SKU", "Plannings", "Charts"];
  const icons = [StoreIcon, CategoryIcon, InsightsIcon, InsertChartIcon];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {drawerMenuItems.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  sx={{
                    backgroundColor:
                      index === 0 ? "rgba(0, 0, 0, 0.15)" : "transparent",
                  }}
                >
                  <ListItemIcon>
                    {React.createElement(icons[index])}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <AgChart />
      </Box>
    </Box>
  );
}
