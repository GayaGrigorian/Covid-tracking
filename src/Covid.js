import React from "react";
import { v4 as uuidv4 } from "uuid";

export default class Covid extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:uuidv4(),
            states:[]
        }
    } 

    componentDidMount(){
        this.getStates()
    }

    getStates(){
        fetch('https://api.covidtracking.com/v1/states/daily.json')
        .then ((res)=>res.json())
        .then ((response)=>this.setState({states:response}))
    }

    render(){
        
        return(
            <>
            <div className="Header">    
                <div className="Title">Date</div>
                <div className="Title">State</div>
                <div className="Title">Positive</div>
                <div className="Title">Death</div>
                <div className="Title">Recovered</div>
            </div>
                {this.state.states.map(state=>
                    <div className="grid-container" key={uuidv4()}>
                            <div className='grid-item'>{state.date}</div> 
                            <div className='grid-item'>{state.state}</div>
                            <div className='grid-item'>{state.positive}</div> 
                            <div className='grid-item'>{state.death}</div>
                            <div className='grid-item'>{state.recovered}</div>
                            
                    </div>
                    )} 
            </> 
           
        )
    }

}