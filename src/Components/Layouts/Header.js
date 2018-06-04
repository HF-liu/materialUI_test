import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../Exercises/Dialogs/Create'


class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
            Exercises! Woo~
          </Typography>
          <CreateDialog 
            muscles={this.props.muscles}
          />
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header