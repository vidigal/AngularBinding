import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  minhaUrl = "https://i.pinimg.com/736x/ea/f7/15/eaf71544c4517c3b59f0bf59f330d07c.jpg";
  imgWidth = 100;
  variavel = false;
  
  ngOnInit(): void {
    
    setInterval(() => {
      //this.variavel = !this.variavel;
    }, 1000);

  }



}
