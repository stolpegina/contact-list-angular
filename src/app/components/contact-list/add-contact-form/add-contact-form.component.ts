import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.scss']
})
export class AddContactFormComponent implements OnInit {

  @Output() addContact: EventEmitter<ContactModel> = new EventEmitter<ContactModel>();

  isShowForm: boolean = false;

  addContactForm: FormGroup;

  constructor(
    private contactsService: ContactsService
  ) {}

  showForm(): void {
    this.isShowForm = true;
  }

  ngOnInit(): void {
    this.addContactForm = new FormGroup({
      name: new FormControl(null, { validators: [Validators.required] }),
      phone: new FormControl(null, { validators: [Validators.required] })
    });
  }

  onSubmit(): void {
    const name = this.addContactForm.value.name;
    const phone = this.addContactForm.value.phone;
    const contact = new ContactModel(name, phone);
    this.contactsService.addContact(contact);
    this.addContactForm.reset();
    this.isShowForm = false;
  }
}
