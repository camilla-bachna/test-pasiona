import React from 'react';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  render() {
    const tasks = [];
    for (let index = 0; index < this.state.counter; index++) {
      tasks.push(
        <>
          <label className="task" htmlFor="task">
            New task
          </label>
          <input
            className="task"
            type="text"
            name="task"
            id="task"
            placeholder="name of task"
          />
        </>
      );
    }

    return (
      <div className="App">
        <header className="header">
          <h1 className="heading">To do</h1>
        </header>
        <main>
          <form>
            <label className="task" htmlFor="task">
              Task example
            </label>
            <input
              className="task"
              type="text"
              name="task"
              id="task"
              value="Task 1"
            />
          </form>
          <div>{tasks}</div>
          <button onClick={this.handleClick}>Add tasks +</button>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
