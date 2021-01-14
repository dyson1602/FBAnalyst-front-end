import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import { Home } from '@material-ui/icons'


// const navLinks = [
//   { title: 'Trade Analyzer', path: '/tradeAnalyzer' },
//   { title: 'Player Ranker', path: '/playerRanker' }
// ]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}))


function Header() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/NBAnalyst">
            <Home />
          </NavLink>
          <NavLink to="/NBAnalyst/tradeAnalyzer">
            <Typography variant="h6" className={classes.title}>Trade Analyzer</Typography>
          </NavLink>
          <NavLink to="/NBAnalyst/playerRanker">
            <Button color="inherit" className={classes.menuButton}>Player Ranker</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default Header