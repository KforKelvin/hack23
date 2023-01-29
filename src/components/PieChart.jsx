import React, { useState } from 'react';

import Plot from 'react-plotly.js';

let today = new Date().toISOString().slice(0, 10);

export default class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {grocery:100,dinning:100, gas:100,retail:100,others:100, total_cash_back:0, total_spending:500.00,
                  pie: {
                        values: [100,100,100,100,100],
                        labels: ["Grocery","Dining","Gas", "Retail", "Others"], 
                        type: 'pie',
                        hovertemplate: '%{label} Spending: %{value:$.2f}<extra></extra>'
                       },
                  layout: { datarevision: 0, legend: {"orientation": "h"},margin: {l:0, r:0, b:0, t:0},hieght: 300,width: 300,},
                  revision: 0,
                  card:" ",
                  cash_back_pie: {
                    values: [100,100,100,100,100],
                    labels: ["Grocery","Dining","Gas", "Retail", "Others"], 
                    type: 'pie'
                  }};
    
    this.handleGroceryChange = this.handleGroceryChange.bind(this);
    this.handleDinningChange = this.handleDinningChange.bind(this);
    this.handleGasChange = this.handleGasChange.bind(this);
    this.handleRetailChange = this.handleRetailChange.bind(this);
    this.handleOthersChange = this.handleOthersChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGroceryChange(event) {
    this.setState({grocery: event.target.value});
  }
  handleDinningChange(event) {
    this.setState({dinning: event.target.value});
  }
  handleGasChange(event) {
    this.setState({gas: event.target.value});
  }
  handleRetailChange(event) {
    this.setState({retail: event.target.value});
  }
  handleOthersChange(event) {
    this.setState({others: event.target.value});
  }

  handleSubmit(event) {
    
    event.preventDefault();
    let u_grocery = parseInt(this.state.grocery);
    let u_dinning = parseInt(this.state.dinning);
    let u_gas = parseInt(this.state.gas);
    let u_retail = parseInt(this.state.retail);
    let u_others = parseInt(this.state.others);
    let vals = [u_grocery,u_dinning,u_gas, u_retail, u_others];
    this.setState({total_spending: (u_grocery+u_dinning+u_gas+u_retail+u_others).toFixed(2)});
    
    const current = { values: vals,
                      labels: ["Grocery","Dining","Gas", "Retail", "Others"], 
                      type: 'pie',
                      hovertemplate: '%{label} Spending: %{value:$.2f}<extra></extra>'
                    };

    this.setState({ pie: current });
    this.setState({ revision: this.state.revision + 1 });
    this.setState({ layout: { datarevision:this.state.revision + 1,
                              hieght: 300,
                              width: 300,
                              legend: {"orientation": "h"},
                              margin: {l:0, r:0, b:0, t:0},} });
  
    let benefit_len = this.props.data[0].length;
    let benefitsArr = new Array(benefit_len);

    for (let i = 0; i < benefit_len; i++) {
      let {offer, fee, grocery, gas, online, dinning, other} = this.props.data[0][i];
      let benefit = offer/12 - fee/12 
                    + u_grocery * grocery * 0.01 
                    + u_gas * gas * 0.01 
                    + u_retail * online * 0.01 
                    + u_dinning * dinning * 0.01 
                    + u_others * other * 0.01;
      benefitsArr[i] = benefit;
    }

    let max_benefit_idx = benefitsArr.indexOf(Math.max(...benefitsArr));

    this.setState({card : this.props.data[0][max_benefit_idx].name}); 
    let {offer, fee, grocery, gas, online, dinning, other} = this.props.data[0][max_benefit_idx];
    let cash_grocery = u_grocery * grocery * 0.01;
    let cash_gas= u_gas * gas * 0.01;
    let cash_retail = u_retail * online * 0.01;
    let cash_dinning = u_dinning * dinning * 0.01;
    let cash_others = u_others * other * 0.01;
    
    let cash_back_vals = [cash_grocery, cash_gas, cash_retail, cash_dinning, cash_others ];
    this.setState({total_cash_back: (offer/12 - fee/12 + cash_grocery + cash_gas + cash_retail + cash_dinning + cash_others).toFixed(2)});
    const cash__back_current = { values: cash_back_vals,
      labels: ["Grocery","Dining","Gas", "Retail", "Others"], 
      type: 'pie',
      hovertemplate: '%{label} Cashback: %{value:$.2f}<extra></extra>'
    }
    this.setState({ cash_back_pie: cash__back_current });
  }

   
  
  render() {
    
    return (
      <div id="cards" className="text-center view-row">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h1> </h1>
            <h2>Credit Card Recommendation</h2>
          </div>
        </div>
        
        
        <table class="table">
          <tbody>
            <tr>
              <td>
                <div className='text-center' >
                  <div className='pie-row'>
                    <div>
                      <h3>My Budget Distribution: </h3>
                      <div className='piechart'>
                        <Plot 
                          data={[
                            this.state.pie,
                          ]}
                          layout={this.state.layout}
                          revision={this.state.revision}
                          graphDiv="graph"
                        />
                        <h3>Total Spending: $<u>{this.state.total_spending}</u></h3>
                      </div>
                    </div>

                    <div className='form-col'>
                      <h3>Enter My Monthly Budget:</h3>
                        
                      <form onSubmit={this.handleSubmit}>
                        <label>
                          Grocery: 
                          <input type="number" name="grocery" defaultValue={this.state.grocery} onChange={this.handleGroceryChange}/>
                        </label>

                        <label>
                          Dinning: 
                          <input type="number" name="dinning" defaultValue={this.state.dinning} onChange={this.handleDinningChange}/>
                        </label>

                        <label>
                          Gas: 
                          <input type="number" name="gas" defaultValue={this.state.gas} onChange={this.handleGasChange}/>
                        </label>

                        <label>
                          Online Retail: 
                          <input type="number" name="retail" defaultValue={this.state.retail} onChange={this.handleRetailChange}/>
                        </label>

                        <label>
                          Others: 
                          <input type="number" name="Others" defaultValue={this.state.others} onChange={this.handleOthersChange}/>
                        </label>
                        <input type="submit" value="Submit"/>
                      </form>

                    </div>
                  </div>
                </div>


              </td>

              <td>
                  {this.state.card === " " ? <p> </p> :
                  <div>
                    <h3>Recommended Card: { this.state.card}</h3>
                    <Plot 
                        data={[
                          this.state.cash_back_pie,
                        ]}
                        layout={this.state.layout}
                        revision={this.state.revision}

                    />
                    <h3>Total Cashback: $<u>{this.state.total_cash_back}</u></h3>
                  </div>
                  }
              </td>
              <td>
              {this.state.card === " " ? <p> </p> :
                  <div>
                    <h3>Recommended Card: { this.state.card}</h3>
                    <Plot 
                        data={[
                          this.state.cash_back_pie,
                        ]}
                        layout={this.state.layout}
                        revision={this.state.revision}
                    />
                    <h3>Total Cashback: $<u>{this.state.total_cash_back}</u></h3>
                  </div>
                  }
              </td>
            </tr>
          </tbody>
        </table>

        
    </div>
    );

  }
};