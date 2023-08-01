import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { max, timestamp } from 'rxjs';
import { WeatherdataService } from 'src/app/weatherdata.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherdata: any;
  cityname = '';
  
  constructor() { }
  ngOnInit(): void {
    this.weatherdata = {
      main: {},
      sys: {},

    }

    this.getweatherdata(this.cityname);
  }
  getweatherdata(cityname: any) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&appid=a3f522eb9ba18b68492981ed218df3f2')
      .then(Response => Response.json())
      .then(data => { this.setweatherdata(data); })

  }
  setweatherdata(data: any) {

    this.weatherdata = data;
    /*let sunsettime = new Date(this.weatherdata.sys.sunset * 1000);
    this.weatherdata.sunset_time = sunsettime.toLocaleTimeString();*/
    /*let sunsrisetime = new Date(this.weatherdata.sys.sunrise * 1000);
    this.weatherdata.sunrise_time = sunsrisetime.toLocaleTimeString();*/
    this.weatherdata.temperature = (this.weatherdata.main.temp - 273.15).toFixed(0);
    this.weatherdata.temp_max = (this.weatherdata.main.temp_max - 273.15).toFixed(0);
    this.weatherdata.temp_min = (this.weatherdata.main.temp_min - 273.15).toFixed(0);
    this.weatherdata.feelsLike = (this.weatherdata.main.feels_like - 273.15).toFixed(0);
    this.weatherdata.humid = this.weatherdata.main.humidity;
    this.weatherdata.cloud = this.weatherdata.clouds.all;
    this.weatherdata.desc = this.weatherdata.weather[0].description;
    this.weatherdata.main_desc = this.weatherdata.weather[0].main;
    this.weatherdata.iconname = this.weatherdata.weather[0].icon;
    this.weatherdata.icons = 'https://openweathermap.org/img/wn/' + this.weatherdata.iconname + '.png';
  }


}






