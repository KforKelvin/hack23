import React from 'react';

import Plot from 'react-plotly.js';

let today = new Date().toISOString().slice(0, 10)

class Chart extends React.Component {

  render() {

    return (
      <div className='row'>

        <div className='form-col'>
          <h3>Add a new expense:</h3>
          <form>
            <label>
              Name: 
              <input type="text" name="name" />
            </label>
            <label>
              Price: 
              <input type="number" name="name" />
            </label>
            <label>
              When: 
              <input type="date" data-date="" data-date-format="DD MMMM YYYY" value={today}/>
            </label>

            <label for="cat">
              Category:
              <select>
                  <option value="gas">Gas</option>
                  <option value="Supermarket">Supermarket</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Electronics">Electronics</option>
              </select>
            </label>

            <input type="submit" value="Submit" />
          </form>
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
                      }
          } }
            />
        </div>

        <div>
          <h3>Previously added Expenses:</h3>
          <ul>
            <li>Thing</li>
          </ul>

        </div>

      </div>
    );

  }

}
export default Chart;