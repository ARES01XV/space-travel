import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'space-travel';

  planetsDisplay = false //planets drpdown click
  viewPlanets(){
    this.planetsDisplay = !this.planetsDisplay;

    let featureLnk = document.querySelector('#planetsLnk');  
    let menu = document.querySelector('#planetsDisplay');  
    if (this.planetsDisplay) {
      document.addEventListener('click', (e) => {
      if(e.target != menu && e.target != featureLnk ) {
          this.planetsDisplay = false;
      }
    }) 
  }


  

    
    
  }

  
}
