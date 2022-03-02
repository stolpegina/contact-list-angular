import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { ContactModel } from '../../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: ContactModel[] = [];
  isFiltered: boolean = false;

  constructor(
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    this.updateContacts()
  }

  filter(e: KeyboardEvent): void {
    const value = (e.target as HTMLInputElement).value.toLocaleLowerCase();
    if (value) {
      this.contacts = this.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(value));
      this.isFiltered = true;
    } else {
      this.updateContacts();
      this.isFiltered = false;
    }
  }

  emptyMessage() {
    if (this.isFiltered) {
      return 'По данному фильтру контактов не найдено'
    } else {
      return 'Еще не добавлено ни одного контакта'
    }
  }

  updateContacts(): void {
    this.contacts = this.contactsService.updateContacts();
  }
}
