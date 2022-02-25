import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  public contacts: ContactModel[]= [
    {
      name: 'Иванов Иван',
      phone: '123456789'
    },
    {
      name: 'Петров Алексей',
      phone: '4656454654'
    }
  ];

}
