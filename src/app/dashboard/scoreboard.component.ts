import { Component } from '@angular/core';

@Component({
    selector: 'al-scoreboard',
    templateUrl: './scoreboard.component.html'
})
export class ScoreboardComponent {

    public options: any;
    constructor() {
        this.options = {
            chart: {
                renderTo: 'lineContainer'
            },
            title: '',
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Points'
                }
            },
            legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
             colors: ['#00c0ef', '#dd4b39'],
            series: [{
                name: 'Gained',
                data: [70.0, 130, 130, 150, 180, 210, 250, 260, 300, 480, 480, 500]
            },
            {
                name: 'Used',
                data: [500, 490, 420, 420, 420, 420, 400, 400, 350, 350, 350, 300]
            }]
        };
    };
}
