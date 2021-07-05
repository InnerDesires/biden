import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email: string;
  constructor() {
    this.email;
  };
  @Output() submited = new EventEmitter<any>();
  ngOnInit(): void {
  }

  submit(){
    this.submited.emit(this.email);
  }

}
