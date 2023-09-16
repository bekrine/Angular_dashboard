import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'tableau_de_bord';
  showMenu=false
  constructor( private router:Router){}

  ngDoCheck(): void {
    let currentUrl = this.router.url
    if(currentUrl !== '/'){
      this.showMenu = true
    }else{
      
      this.showMenu =false
        }
  }
}
