import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities:any;
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.api.get().subscribe((result)=>{
      this.cities = result;
      // console.log(this.cities);
      
    })
  }

  deleteCity(id:number){
    this.api.delete(id).subscribe((result)=>{
      // console.log(result);
      this.getAll();
    })
  }
}
