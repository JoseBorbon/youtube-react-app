import { Component } from 'react/cjs/react.production.min';
import './Careers.css';
import biker from"../../../media/biker.jpeg"
import manWithChair from"../../../media/manwithchair.jpg"
 import woman from"../../../media/woman.jpg"
import { Department } from './Department';
import { City } from './City';
class Careers extends Component  {

  constructor(){
    super()
    this.state={
      color:"",
      isDepartment:true,
    }
  }


  changePage = ()=> {
    this.setState  ({
      isDepartment: !this.state.isDepartment
    })
  }


  render() {

  return( 
      <main className="article-page-container">
        
          <div className='first-page'>
              <div className='textBox'>
                <h2>Create opportunities<br></br> <span>with us<br></br></span></h2>
                <h3>We’re looking for creative minds to help us build the world’s best visual learning place .</h3>
              </div>
              <div className='image-box'>
                <img className="biker"src={biker} alt='biker'/>
                <img className="woman" src={woman} alt="woman"/>
                <img className="chair" src={manWithChair} alt='chair'/>
              </div>
          </div>
          <div className='second-page'>
                <h2>Discover your next role</h2>
                  <h3>Select up to two departments, followed by two cities you are considering for your next career move.
                    Then, we’ll help determine the best opportunities for you.
                  </h3>
                {this.state.isDepartment ? <Department isDepartment ={this.state.isDepartment}/> : <City/>}
                 <div className='row-2'>
                 <span onClick ={this.changePage} style={this.state.isDepartment ? {backgroundColor:`rgb(87, 79, 118)`} : {backgroundColor:"white"} } class="dot-1"></span>  
                 <span onClick ={this.changePage} style={!this.state.isDepartment ? {backgroundColor:`rgb(87, 79, 118)`} : {backgroundColor:"white"}} class="dot-2"></span>
                   <p> Apply today! Send us your resume and CV at helloWorld@JKJ.com</p>
                 </div> 
          </div>
      </main>
      )
  }
};

export default Careers;
