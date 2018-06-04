import React, { Component } from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'

class Footer extends Component {
  getIndex = () => (
    this.props.category
    ? this.props.muscles.findIndex(group => group === this.props.category) + 1
    : 0
  )

  render() {
    return (
      <Paper>
        <Tabs
          value={this.getIndex()}
          onChange={(e,index) => {
            this.props.onSelect(index === 0 ? '' : this.props.muscles[index - 1])
          }}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
        <Tab label="ALL"></Tab>
        {this.props.muscles.map(group =>
          <Tab key={group} label={group}></Tab>
        )}
        </Tabs>
      </Paper>
    )
  }
}

export default Footer