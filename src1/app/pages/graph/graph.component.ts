import { AfterViewInit,Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ModalController } from '@ionic/angular';
import { ApexAxisChartSeries, ApexTitleSubtitle, ApexDataLabels,ApexChart, ChartComponent} from "ng-apexcharts";
//import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
//import { Label } from 'ng2-charts';
//Chart.register(ChartDataLabels);
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: any;
};

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  //public chartType: string = 'bar';
  barChart: any;
  chartLabels = ChartDataLabels;
  barChartLabels: any[];
  heatData=[];
  showChartHeat=false;
  constructor(private auth:AuthService,public modalController: ModalController) { 

}


public generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = "w" + (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}


  lebels=[];
  data=[]
  chartType='bar'
  selectState=[
    {state:"Andaman Nicobar",id:1},
    {state:"Andhra Pradesh",id:2},
    {state:"Arunachal Pradesh",id:3},
    {state:"Assam",id:4},
    {state:"Bihar",id:5},
    {state:"Chandigarh",id:6},
    {state:"Chhatisgarh",id:7},
    {state:"Dadar and Nagar Haveli",id:8},
    {state:"Daman and Diu",id:9},
    {state:"Delhi",id:10},
    {state:"Goa",id:11},
    {state:"Gujarat",id:12},
    {state:"Haryana",id:13},
    {state:"Himachal Pradesh",id:14},
    {state:"Jammu Kashmir",id:15},
    {state:"Jharkhand",id:16},
    {state:"Karnatka",id:17},
    {state:"Kerala",id:18},
    {state:"Lakshadweep",id:19},
    {state:"Madhya Pradesh",id:20},
    {state:"Maharastra",id:21},
    {state:"Manipur",id:22},
    {state:"Meghalaya",id:23},
    {state:"Mizoram",id:24},
    {state:"Nagaland",id:25},
    {state:"Odisha",id:26},
    {state:"Puducherry",id:27},
    {state:"Punjab",id:28},
    {state:"Rajasthan",id:29},
    {state:"Sikkim",id:30},
    {state:"TamilNadu",id:31},
    {state:"Telangana",id:32},
    {state:"Tripura",id:33},
    {state:"Uttar Pradesh",id:34},
    {state:"Uttrakhand",id:35},
    {state:"WestBengal",id:36},
    {state:"Ladakh",id:37},
   
    {state:"The Dadar and Nagar Haveli & Daman and Diu",id:38},
  ]

  ngOnInit() {}
  getData(ev){
    let id=ev.target.value;
    //alert(id)
    this.auth.getdata(id).then(res=>{
      console.log(res)
      this.auth.graphData=res;
      console.log(res)
      this.barChart.destroy()
      //this.showgraph()
      if(this.chartType=="bar"){
        this.barChart.destroy()
        this.showgraph()
      }
      else if(this.chartType=="grant"){
        this.barChart.destroy()
        this.showgrantgraph()
      }
      else if(this.chartType=="histo"){
        this.barChart.destroy()
        this.showhistogram()
      }
      else if(this.chartType=="heat"){
        this.showheatMap()
        this.barChart.destroy()
      }
    })
  }
   showgraph(){
     this.getChartLength()
     console.log(this.lebels)
     console.log(this.data)
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      
      data: {
        //labels: this.data,
         labels: this.lebels,
        datasets: [{
          label: '',
          data:this.data,
          //data: [this.auth.graphData[0].Total, this.auth.graphData[1].Total,this.auth.graphData[2].Total, this.auth.graphData[3].Total, this.auth.graphData[4].Total],
          backgroundColor: [
            
            'rgba(54, 162, 235, 0.2)',
           
          ],
          borderColor: [
            
            'rgba(54, 162, 235, 1)',
            
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
        
        }
      }
    });
     }

     showgrantgraph(){
      this.getChartLength()
      console.log(this.lebels)
      console.log(this.data)
     this.barChart = new Chart(this.barCanvas.nativeElement, {
       type: 'bar',
       
       data: {
         labels: this.lebels,
         datasets: [{
           label: '',
           data:this.data,
           //data: [this.auth.graphData[0].Total, this.auth.graphData[1].Total,this.auth.graphData[2].Total, this.auth.graphData[3].Total, this.auth.graphData[4].Total],
           backgroundColor: [
             
             'rgba(54, 162, 235, 0.2)',
            
           ],
           borderColor: [
             
             'rgba(54, 162, 235, 1)',
             
           ],
           borderWidth: 1
         }]
       },
       
       options: {
        scales: {
        
        }
      }
     });
      }

  showhistogram(){
    this.barChartLabels=this.data
    this.getChartLength()
      console.log(this.lebels)
      console.log(this.data)
     this.barChart = new Chart(this.barCanvas.nativeElement, {
       type: 'bar',
       
       data: {
         labels: this.lebels,
         datasets: [{
           label: 'Charts',
           data:this.data,
           backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
             ],
           borderColor: [
              'rgba(54, 162, 235, 1)',
              ],
           borderWidth: 1
         }]
       },
       plugins: [ChartDataLabels],
      options: {
        plugins: {
          datalabels: {
            formatter: function(value, context) {
              return  Math.round(value) + '%';
            }
          }
          },
         indexAxis: 'y',
       }
     });
  }

  showheatMap(){
    this.getChartLength()
    console.log(this.heatData)
    this.chartOptions = {
      series:this.heatData,
      chart: {
        height: 350,
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#008FFB"],
      title: {
        text: "HeatMap Chart (Single color)"
      }
    };
  }

   getChartLength(){
     console.log(this.auth.graphData)
    for(let i=0;this.auth.graphData.length>i;i++){
      this.lebels[i]=this.auth.graphData[i].Cat_Name;
      this.data[i]=this.auth.graphData[i].Total;
      this.heatData[i]= {
        name: this.lebels[i],
        data: this.generateData(this.data[i], {
          min: 0,
          max: 90
        })
      }

     
    }
   }
   ngAfterViewInit(){
   this.showgraph()
   }
   close(){
    this.modalController.dismiss()
   }
   changeChart(ev){
    let chart=ev.target.value;
    if(chart=="bar"){
      this.chartType="bar"
      this.showChartHeat=false;
      this.barChart.destroy()
      this.showgraph()
    }
    else if(chart=="grant"){
      this.chartType="grant"
      this.showChartHeat=false;
      this.barChart.destroy()
      this.showgrantgraph()
    }
    else if(chart=="histo"){
      this.chartType="histo"
      this.showChartHeat=false;
      this.barChart.destroy()
      this.showhistogram()
    }
    else if(chart=="heat"){
      this.chartType="heat"
      this.showChartHeat=true;
      this.barChart.destroy()
      this.showheatMap();
    }
  }
}