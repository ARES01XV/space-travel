import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  contactForm = this.fb.group({
    yourName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    message: ['', [Validators.required]]
  })

  message(){
    if(this.contactForm.valid){
      alert('Message sent, thank you for your feedback.')
    }else{
      alert('Please fill out the form in its entirety.')
    }
  }

  ngOnInit(): void {
  }

}
