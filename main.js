import { loadsection1 } from "./section1.js";
import {plotBloodPressure} from "./chart.js";
import { dygnosticListTable } from "./diagnostic-list.js";
import { labResults, profile } from "./section3.js";


let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);

fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
    headers: {
        'Authorization': `Basic ${auth}`
    }
})
    .then(res => res.json()
    )
    .then(data => {
        loadsection1(data);
       const jessicaTaylor = data.find(person => person.name === 'Jessica Taylor');
       plotBloodPressure(jessicaTaylor);
       dygnosticListTable(jessicaTaylor.diagnostic_list)
       profile(jessicaTaylor)
       labResults(jessicaTaylor.lab_results)

    })
    .catch(error => {
        console.error('Error:', error)
    });



