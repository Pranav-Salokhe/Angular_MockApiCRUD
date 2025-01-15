import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private api:ApiService,private router:Router,private route:ActivatedRoute){}
  // Router used for navigation purpose
  // ActivatedRoute is used for geting id from search box
  formData:any;
  id:any;
  data:any;
  ngOnInit(): void {

    
    this.id = this.route.snapshot.paramMap.get("id");
    // console.log(this.id);
    // console.log(this.data);
    

    if(this.id != null){
    this.api.getbyid(this.id).subscribe((result)=>{
      console.log(result);
      this.data = result;
      this.bind();
      
    })
  }
  else{
    this.bind();
  }
    

    
  }

  bind(){
    this.formData = new FormGroup({
      id : new FormControl(this.data != null ? this.data.id : "0"),
      name : new FormControl(this.data != null ? this.data.name : "")
    })
  }

  saveData(data:any){
    // console.log(data);
    
    if(data.id != 0){
      this.api.put(data.id,data).subscribe((result)=>{
        this.router.navigate(['/cities']);
        // this.bind();
      })
    }
    else{
    this.api.post(data).subscribe((result)=>{
      this.router.navigate(['/cities']);
      // console.log(result);
      
      
    })
  }
    
  }

}
