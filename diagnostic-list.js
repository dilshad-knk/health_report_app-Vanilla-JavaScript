

export function dygnosticListTable(data) {
  
    const tableBody = document.getElementById('diagnosticTable').getElementsByTagName('tbody')[0];


    {data && data.forEach(list => {
       
        const row = document.createElement('tr');
       

        
        Object.values(list).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

      
        tableBody.appendChild(row);
    });}


}

