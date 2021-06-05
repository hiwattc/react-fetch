import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
 
class Codelab extends React.Component{
  render(){
    let text = 'Hello World';
    let style = {
      backgroundColor:'aqua'
    };
    //JSX형태 : babel이 jsx문법을 변환해준다
    return(
      <div >
        {/* 주석입니다. */}
        <h1>Codela1</h1>
        <div style={style}><h2 >{text}</h2></div>
        <h1>Hello {this.props.name}</h1>
        <div>{this.props.children}</div>
        <h2>{this.props.number}></h2>
      </div>
    )
  }
}
class App2 extends React.Component{
  render(){
    return(
      <div>
        <Codelab/>
        <Codelab name="hiwatt">태그사이에 있는 글자</Codelab>
        <Codelab name={this.props.name}>{this.props.children}</Codelab>
      </div>
    );
  }
}
         
Codelab.propTypes = {
    //아래는 이상하게 오류남
    //name:React.PropTypes.string,
    //number:React.PropTypes.number.isRequired
};
Codelab.defaultProps={
          name:'Unknown'
        };
        
//ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<App2 name="Hello I'm hiwatt">Yep This is me</App2>, document.getElementById('root2'));


ReactDOM.render(
  <h1>Hello1234-----------------, world!</h1>,
  document.getElementById('root3')
);



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit1234 hiwatt <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;




class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: null
        };
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => this.setState({ totalReactPackages: data.total }));
    }

    render() {
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                    hiwatt hahah Total react packages: {totalReactPackages}
                </div>
            </div>
        );
    }
}

export { GetRequest }; 
 
ReactDOM.render(<GetRequest></GetRequest>, document.getElementById('root4'));




//news api
//https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=d1bdf41741da4f9b92fc2316cbb90bd3


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: []
    };
  }

  componentDidMount() {
    fetch("https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=d1bdf41741da4f9b92fc2316cbb90bd3")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result.articles
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {articles.map(articles => (
            <li key={articles.url}>
              {articles.title} {articles.publishedAt} {articles.author}
              {articles.description}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export { MyComponent }; 
 
ReactDOM.render(<MyComponent></MyComponent>, document.getElementById('root5'));
