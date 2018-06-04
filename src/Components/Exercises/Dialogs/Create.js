import React, { Component, Fragment } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { Add } from '@material-ui/icons'

export default class extends Component {
  state = {
    open: false,
    excercise: {
      title: '',
      description: '',
      muscles: ''
    }
  }


  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      }
    })
  }

  render() {
    const { open, excercise: { title, description, muscles } } = this.state, {muscles: categories} = this.props
    return <Fragment>
      <Button variant="fab" onClick={this.handleToggle} mini>
        <Add />
      </Button>
      <Dialog
            open={open}
            onClose={this.handleToggle}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Create a New Exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Content
              </DialogContentText>
              <form>
              <TextField
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
                /> 
                <br/>
                <FormControl>
                  <InputLabel htmlFor="muscles">Muslces</InputLabel>
                  <Select
                    value={muscles}
                    onChange={this.handleChange('muscles')}
                  >
                    {categories.map(category => 
                      <MenuItem value={category}>
                        {category}
                      </MenuItem>
                    )}
                  </Select>
               </FormControl>
               <br />
                <TextField
                label="Description"
                multiline
                rows="4"
                value={description}
                onChange={this.handleChange('description')}
                margin="normal"
                /> 
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" variant="raised">
                Create
              </Button>
            </DialogActions>
          </Dialog>
    </Fragment>

  }
}
  