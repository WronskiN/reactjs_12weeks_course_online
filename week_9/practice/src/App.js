import React from 'react';
import './App.css';
import ColBorder from './components/ColBorder';
import Hello from './components/Hello';

const theme = {
  buttonColor: 'red',
  isAuthenticated: false,
};

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.summaryText}</p>
    </article>
  );
}

const MyContext = React.createContext();

// class ThemeButton extends React.Component {
//   // static contextType = MyContext; //this.context
//   render() {
//     return (
//       <button style={{ color: this.context.buttonColor }}>Click me</button>
//     );
//   }
// }

// ThemeButton.contextType = MyContext; // if you cant use static

const ThemeButton = () => {
  return (
    <MyContext.Consumer>
      {(value) => (
        <button style={{ color: value.buttonColor }}>Click me</button>
      )}
    </MyContext.Consumer>
  );
};

const Toolbar = (props) => {
  return (
    <div>
      <ThemeButton />
      <ThemeButton />
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <Hello name='Norbert' />
      <ColBorder>
        <Article
          title='Blog'
          description={
            <ColBorder>
              A spoken or written account of a person, object, or event.
            </ColBorder>
          }
          summaryText='Great person.'
        />
      </ColBorder>
      <MyContext.Provider value={theme}>
        <Toolbar />
      </MyContext.Provider>
    </div>
  );
}

export default App;
