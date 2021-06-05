
import { Doughnut,Bar } from 'react-chartjs-2'

export function ToysCharts({ maps }) {

    const toysPerTypePriceData = {
        labels: Object.keys(maps[0]),
        datasets: [
            {
                label: 'Prices Per Toy',
                data: Object.values(maps[0]),
                backgroundColor: [
                    '#ff595e',
                    '#ffca3a',
                    '#8ac926',
                    '#6a4c93',
                    '#a3cef1',
                    '#ea3546',
                ],
                borderWidth: 0,
            }
        ]
    }

    const toysPerYearData = {
        labels: Object.keys(maps[1]),
        datasets: [
            {
                label: 'Toys Per Year',
                data: Object.values(maps[1]),
                backgroundColor: [
                    '#ff595e',
                    '#ffca3a',
                    '#8ac926',
                    '#6a4c93',
                    '#a3cef1',
                    '#ea3546',
                ],
                borderWidth: 0,
                options: {
                    scales: {
                      y: {
                        beginAtZero: true
                      }
                    }
                  },
                }
        ]
    }
    return (
        <section className="toys-charts flex">
            <div>
                <span>Toys per type price</span>
                <Doughnut data={toysPerTypePriceData} />
            </div>
            <div>
            <span>Toys per year</span>
                <Bar data={toysPerYearData}/>
            </div>
        </section>
    )
}
