import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mess: string = '';
  sujet: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  public envoyerMail(): string {
    return `mailto:mathislafage31@gmail.com?subject=${this.sujet}&body=${this.mess}`;
  }


}
