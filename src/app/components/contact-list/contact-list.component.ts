import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../models/contact.model';
import { CONTACTS } from './contacts.mockup';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: ContactModel[] = [];

  ngOnInit(): void {
    this.contacts = CONTACTS;
  }

  addContact(contact: ContactModel): void {
    this.contacts.push(contact);
  }

  filter(e: KeyboardEvent): void {
    const value = (e.target as HTMLInputElement).value.toLocaleLowerCase();
    if (value) {
      this.contacts = this.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(value));
    } else {
      this.contacts = CONTACTS;
    }

  }
}
