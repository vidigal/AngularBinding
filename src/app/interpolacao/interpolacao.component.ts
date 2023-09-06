import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent {

  url = 'https://4.bp.blogspot.com/-F2J-i2wKiwk/V843WYclPXI/AAAAAAAAW8Q/B9WjwBLgDW0YLrg5_k0XyQaLuUHZ1-F2wCLcB/s1600/s.jpg'


  getSentence() {
    return "I don't wanna die, but sometimes I want to not born at all"
  }

}
