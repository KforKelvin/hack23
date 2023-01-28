import React, { useState } from 'react';

import Plot from 'react-plotly.js';

let today = new Date().toISOString().slice(0, 10);


class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', amount:0, spending:[], pie: {
                                                          values: [],
                                                          labels: [], 
                                                          type: 'pie'
                                                        },
                                                  layout: { 
                                                    datarevision: 0,
                                                  },
                                                  revision: 0,};
    

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleAmountChange(event) {
    this.setState({amount: event.target.value});
  }

  handleSubmit(event) {
    let temp = this.state.spending;
    let item = [this.state.name , this.state.amount];
    temp.push(item);
    this.setState({spending:temp});

    this.state.pie.values.push(this.state.amount);
    this.state.pie.labels.push(this.state.name);
    this.setState({ revision: this.state.revision + 1 });
    this.setState({ layout: { datarevision:this.state.revision + 1,
                              height: 300,
                              width: 400,
                              legend: {"orientation": "h"},
                              margin:{l:0, r:0, b:0, t:0},} });
    
    event.preventDefault();
  }

  render() {

    return (
      <div className='row'>

        <div className='row'>
              
          <div>
            <h3>Current Expenses:</h3>
              <div className='row'>

                {/* <Plot 
                  data = {[
                    {

                      values: [55, 49, 44, 24, 15],
                      
                      labels: ["Italy","France","Spain","USA","Argentina"],
                      
                      type: 'pie'
                    }
                  ]}
                  
                  
                  layout = {{
                  
                    height: 300,
                    width: 400,
                    legend: {"orientation": "h"},
                    margin:{l:0, r:0, b:0, t:0},
                    datarevision: this.state.revise
                    
                  }}
                  /> */}
                  <Plot 
                    data={[
                      this.state.pie,
                    ]}
                    layout={this.state.layout}
                    revision={this.state.revision}
                    graphDiv="graph"
                  />
                  <div className="cart">
                    <ul>
                      {this.state.spending.map(item => <li key={item}>{item[0]}:{item[1]}</li>)}
                    </ul>
                  </div>
                </div>

          </div>
          <div className='form-col'>
            <h3>Add a new expense:</h3>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name: 
                <input type="text" name="name" onChange={this.handleNameChange} />
              </label>
              <label>
                Amount: 
                <input type="number" name="amount" onChange={this.handleAmountChange}/>
              </label>

              <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </form>
          </div>
        </div>
        
        <div >
          <Plot
            data={[
              {
                x: ['2013-10-04', today],
                y: [2, 6],
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
              },
              {
                x: ['2013-10-04', today],
                y: [6, 2],
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'blue'},
              },
                           
            ]}
            
            layout={ {width: 550, 
                      height: 500, 
                      title: 'A Fancy Plot',
                      xaxis: {
                        autorange: true,
                        type: 'date'
                      },
                      yaxis: {
                        autorange: true,
                        type: 'linear'
                      },
                      
          } }
            />
        </div>


      </div>
    );

  }

}
export default Chart;