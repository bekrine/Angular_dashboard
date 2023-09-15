import { Component,OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { SeriesWaterfallOptions } from 'highcharts';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-condidat-by-month',
  templateUrl: './condidat-by-month.component.html',
  styleUrls: ['./condidat-by-month.component.css']
})
export class CondidatByMonthComponent {
  data=[0,0,0,0,0,0,0,0,0,0,0,0]
  chart:Chart
  name='Condidate'
  months:any
  count:number=0
  

  constructor(private services:AuthService) {
    
  }
  
  ngOnInit(){
    this.services.getAllUsers().subscribe(res=>{
   let dates=Object.values(res).filter(val=>val.role !== 'Admin').map(val=>val.date)
       this.months=dates.map(val=>new Date(val).getMonth()+1)
      this.data.forEach((month,index) => {
       let newMonths=this.months.filter(val=>val === index+1)
      this.data[index]=newMonths.length
      });

      this.chart = new Chart({
    
        chart:{
          type:'bar',
          height:325,
          backgroundColor:'#F9F9F9'

        },
        title:{
          text:'Condidat pour chaque mois'
        },
        xAxis:{
          categories:[
            'Janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre' , 'décembre'
          ]
        },
        yAxis:{
          title:{
            text:'Nomber de condidate'
          }
        },
        series: [<SeriesWaterfallOptions>{
          name: this.name,
          data: this.data
      },],
      credits:{
        enabled:false
      }
      })


    })

  }
  






  

}
