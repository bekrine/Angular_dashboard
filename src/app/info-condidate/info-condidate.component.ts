import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-info-condidate',
  templateUrl: './info-condidate.component.html',
  styleUrls: ['./info-condidate.component.css']
})
export class InfoCondidateComponent {

  user:any
  constructor(private route:ActivatedRoute, private services:AuthService) { }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      const id = params['id']
      this.services.getUser(id).subscribe(res=>{
        this.user = res
      })
    
    })
  }

}
