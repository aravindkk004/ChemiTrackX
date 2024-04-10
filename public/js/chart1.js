const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
        {
            label: 'Production Trends Over Time',
            data: [30, 40, 35, 50, 49],
            borderColor: 'blue',
        },
    ],
};


const ctx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
});
      
       const data2 = {
        datasets: [
            {
                label: 'Market Share vs. Profitability Analysis',
                data: [
                    { x: 10, y: 20 },
                    { x: 20, y: 30 },
                    { x: 30, y: 40 },
                    { x: 40, y: 50 },
                    { x: 50, y: 60 },
                ],
                borderColor: 'blue',
                backgroundColor: 'blue',
                pointRadius: 5,
            },
        ],
    };



   
    const options = {
        responsive: true,
        maintainAspectRatio: true,
    };

    
    const ctx2 = document.getElementById('scatterChart').getContext('2d');
    const scatterChart = new Chart(ctx2, {
        type: 'scatter',
        data: data2,
        options: options,
    });

    const data3 = {
        labels: ['Production Volume', 'Market Share', 'Profit Margins', 'Safety Records'],
        datasets: [{
            data: [30, 20, 15, 35],
            backgroundColor: ['red', 'blue', 'green', 'orange'],
        }],
    };

   
    const ctx3 = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(ctx3, {
        type: 'pie',
        data: data3,
    });
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth', 
            events: [
                {
                    title: 'Event 1',
                    start: '2023-10-01',
                    end: '2023-10-03'
                },
                {
                    title: 'Event 2',
                    start: '2023-10-15',
                    end: '2023-10-18'
                }
                
            ]
        });
        calendar.render();
    });

 
            const data4 = {
                labels: ['Profit Margin', 'Production Efficiency', 'Safety Record', 'Environmental Compliance', 'Market Share'],
                datasets: [
                    {
                        label: 'A',
                        data: [90, 75, 80, 95, 70],
                        borderColor: 'blue',
                        backgroundColor: 'rgba(0, 0, 255, 0.2)',
                    },
                    {
                        label: 'B',
                        data: [80, 90, 70, 85, 60],
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.2)',
                    },
                ],
            };
    
  
            const options4 = {
                responsive: true,
                maintainAspectRatio: true,
            };
    
 
            const ctx4 = document.getElementById('radarChart').getContext('2d');
            const radarChart = new Chart(ctx4, {
                type: 'radar',
                data: data4,
                options: options4,
            });