import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { SeriesWaterfallOptions } from 'highcharts';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-condidat-by-payments',
  templateUrl: './condidat-by-payments.component.html',
  styleUrls: ['./condidat-by-payments.component.css']
})
export class CondidatByPaymentsComponent {
  @ViewChild('chartCanvas') chartCanvas: ElementRef

  chart: Chart
  data: any
  condidatePayer: number = 0
  condidateNonPayer: number = 0

  name = 'payment'
  type = 'pie'



  constructor(private services: AuthService) {

  }



  ngOnInit() {
    this.services.getAllUsers().subscribe(res => {
      this.condidatePayer = Object.values(res).filter(val => val.role !== 'Admin')
        .filter(val => val.payments !== '').length

      this.condidateNonPayer = Object.values(res).filter(val => val.role !== 'Admin').length - this.condidatePayer


      this.data = [{
        name: 'Payer',
        y: this.condidatePayer,
        color: 'red'
      },
      {
        name: 'Non Payer',
        y: this.condidateNonPayer,
        color: 'green'
      }
      ]


      this.chart = new Chart({
        chart: {
          type: 'pie',
          height: 325,
          backgroundColor:'#F9F9F9'
        },
        title: {
          text: 'Condidat payer'
        },
        xAxis: {
          categories: [
            'Payer',
            'Non Payer'
          ]
        },
        yAxis: {
          title: {
            text: 'condidate payements en %'
          }
        },
        series: [<SeriesWaterfallOptions>{
          name: this.name,
          type: this.type,
          data: this.data
        },],
        credits: {
          enabled: false
        }
      })

    })
  }











}
