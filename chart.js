let chartInstance = null

export function plotBloodPressure (data){

const ctx = document.getElementById('myChart');

if (chartInstance !== null) {
    chartInstance.destroy();
  }

const sixmonths = data.diagnosis_history.slice(0,6).reverse();


const labels = sixmonths.map(item => `${item.month} ${item.year}`);


const diastolicData = sixmonths.map(item => item.blood_pressure.diastolic.value);
const systolicData = sixmonths.map(item => item.blood_pressure.systolic.value);

chartInstance =  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
            label: 'Diastolic Blood Pressure',
            data: diastolicData,
            borderColor: 'rgb(140, 111, 230)',
            backgroundColor: 'rgb(140, 111, 230)',
            borderWidth: 1
        },
        {
            label: 'Systolic Blood Pressure',
            data: systolicData,
            borderColor:'rgba(230, 111, 210, 1)',
            backgroundColor: 'rgba(230, 111, 210, 1)',
            borderWidth: 1
        }
    ]
    },
    options: {
  
      scales: {
          x: {
              title: {
                  display: true,
                  text: 'Months'
              }
          },
          y: {
              min: 40,
              max: 200,
              ticks: {
                  stepSize: 20
              },
              title: {
                  display: true,
                  text: 'Blood Pressure'
              }
          }
      }
  }
  });

  
    return chartInstance
}