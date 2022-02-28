import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  contacts: ContactModel[] = [
    new ContactModel('Иванов Иван', '123456789'),
    new ContactModel('Петров Алексей', '4656454654')
  ];

  addContact(contact: ContactModel): void {
    this.contacts.push(contact);
  }
}
