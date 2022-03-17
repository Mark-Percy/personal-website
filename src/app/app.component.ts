import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mark-percy';

  startBuildv: string = ""
  
  startBuild(){
    if(this.startBuildv == ""){
      this.startBuildv = "Nothing to build";

    } else {
      this.startBuildv = "";
    }
  }
}
