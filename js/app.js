const {createApp} = Vue
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)

createApp({
    components: {
        Doughnut
    },
    data() {
        return {
            message: 'Hello Vue!',
            options: {
                responsive: true,
                maintainAspectRatio: true,
            },
            chartData: {
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [40, 20, 80, 10]
                    }
                ]
            }
        }
    }
}).mount('#app')
