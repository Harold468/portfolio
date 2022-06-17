import React from 'react';
import './App.css';
import Nav from './nav';
import First from './firstone';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

class App extends React.Component {
  constructor(){
    super()
    this.datetime = this.datetime.bind(this)
    this.state={
      first:"Loading..."
    }
  }
  datetime(){
    let now;
    let footerz;
    now = new Date;
    footerz =now.toDateString()
    console.log(footerz)
}
  componentDidMount(){
    this.datetime()
    this.setState({
      first:""
    })
  }
  render(){
  return (
    <Router>
    <div className="App">
       <div>
        <Nav />
        <h2 className='container-fluid btn btn-primary ' style={{fontSize:32}}>Harold Osei Frimpong Kwabena</h2>
        <div className='container'>
          <div className='row'>
        <div className='bg-black mypic'>
        <img className='img' src="harold.jpg" width={300} height={300} />
        <br/><br/>
        <div className='float-left bg-light text-dark container fluid'>
         <article>
          <section>
            <h2 className=' h2main container-fluid'>Introduction</h2>
            <p className='justify-content-space-around float-left col-sm-12 col-md-12 col-lg-12'>In a Technology based world such as this, One cannot help but wonder what else could be out there.
            Our economy as well as other  aspects of our daily lives are greatly assisted by technology either through software automation or in 
            another form in our lives.<br/> At a young Age, I for one was always facinated by information technoloy and took it
            upon myself to learn more and adjust to the ever-changing state of society we find ourselves in.</p>
            <p>As at November 2022, I am a proud civil engineer first, graduating with second classs upper at Kwame 
            Nkrumah University of Science and Technology.My rpefered interest interest is structural engineering having mastered protastructure software for the 
            development of buildings using the British Standard code. A skilled python developer having mastered desktop, android as well as 
            web development with python.Other programming languages I've explored aside react can be found in my resume. </p>
          </section>
          
         </article>
        </div>
        </div>
        </div>
        </div>
        <Switch>
          <Route exact path="/example">
        <First/>
        </Route>
        </Switch>
    </div>
    </div>
    </Router>
  );
}
}

export default App;
