import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts/index'
import Exercises from './Exercises'
import { muscles, exercises } from './store'

class App extends Component {
  state = {
    exercise: {},
    exercises,
    category: ''
  }

  getExercisesByMuscles(){
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]
        return exercises
      },{})
    )
  }

  handleCategorySelected = category =>{
    this.setState({
      category
    })
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state
    return (
      <Fragment>
        <Header 
          muscles={muscles}
        />
        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelected}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    )
  }
}

export default App
