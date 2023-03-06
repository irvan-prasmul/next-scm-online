import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Refresh from "@mui/icons-material/Refresh";
import _ from "lodash";
import TableChartOutlined from "@mui/icons-material/TableChartOutlined";
import TextField from "@mui/material/TextField";

export default function MainTableMenu({
  handleRefreshTable,
  searchTable,
  handleSearchTable,
  columnSelect,
  handleColumnChange,
  customButtons, // array button element with handler
}) {
  const [openColumnList, setOpenColumnList] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggleColumnList = () => {
    setOpenColumnList((prevOpen) => !prevOpen);
  };
  const handleCloseColumnList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenColumnList(false);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} md="auto">
          <ButtonGroup
            variant="contained"
            color="secondaryButton"
            sx={{ pt: 2 }}
          >
            <Button size="small" onClick={handleRefreshTable}>
              <Refresh sx={{ mr: 1 }} />
              <Typography variant="bodyCst1">Refresh Table</Typography>
            </Button>
            {customButtons && customButtons.length > 0 ? (
              customButtons.map((element) => element)
            ) : (
              <></>
            )}
            <Button
              size="small"
              aria-controls={openColumnList ? "split-button-menu" : "none"}
              aria-expanded={openColumnList ? "true" : "false"}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggleColumnList}
              ref={anchorRef}
            >
              <TableChartOutlined sx={{ mr: 1 }} />
              <Typography variant="bodyCst1">Set Columns</Typography>
              <ArrowDropDown sx={{ ml: 1 }} />
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={0} md></Grid>
        <Grid
          item
          xs={12}
          md="auto"
          sx={{
            display: "flex",
            alignItems: "end",
          }}
        >
          <TextField
            size="small"
            label="Search"
            value={searchTable}
            onChange={handleSearchTable}
            sx={{ width: 200 }}
          />
        </Grid>
      </Grid>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={openColumnList}
        anchorEl={anchorRef.current}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleCloseColumnList}>
                <MenuList
                  id="split-button-menu"
                  autoFocusItem
                  sx={{ minWidth: 250 }}
                >
                  {[
                    ...columnSelect,
                    { id: "reset", label: "Restore Columns" },
                  ].map((col) => (
                    <MenuItem
                      onClick={() => handleColumnChange(col.id)}
                      key={col.id}
                      selected={col.isShow}
                    >
                      <ListItemText primary={col.label} />
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
