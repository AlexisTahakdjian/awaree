import React from "react"
import { Radar } from "react-chartjs-2"

const data = {
  labels: ['Développement Front-End', 'Graphisme', 'Webdesigner', 'Gestion de projet', 'Esprit d\'équipe', 'Gestion du stress', 'Gestion du stress', 'Confiance en soi'],
  datasets: [
    {
      label: 'Mes compétences',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [1, 4, 3, 2, 2, 1, 4, 2]
    }
  ]
};

var createReactClass = require('create-react-class');

const GraphiqueCompetence = createReactClass({
  displayName: 'RadarExample',

  render() {
    return (
      <div>
        <Radar
          data={data}
          width={560}
          height={560}
          options={{ maintainAspectRatio: false }}
        />
      </div>

    );
  }
});

export default GraphiqueCompetence