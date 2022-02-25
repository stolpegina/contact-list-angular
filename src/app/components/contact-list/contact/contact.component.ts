import { Component, OnInit, Input  } from '@angular/core';
import { ContactModel } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() public contact!: ContactModel;

  constructor() { }

  ngOnInit(): void {
  }

}
