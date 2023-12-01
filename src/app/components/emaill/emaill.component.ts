import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OnSameUrlNavigation } from '@angular/router';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-emaill',
  templateUrl: './emaill.component.html',
  styleUrls: ['./emaill.component.css'],
})
export class EmaillComponent implements OnInit {
  data = {
    to: '',
    subject: '',
    message: '',
  };
  flag = false;

  constructor(private email: EmailService, private snak: MatSnackBar) {}
  ngOnInit(): void {}

  doSubmitForm() {
    console.log('try to submit form');
    console.log('DATA', this.data);

    if (
      this.data.to == '' ||
      this.data.subject == '' ||
      this.data.message == ''
    ) {
      this.snak.open('Field can not be empty', 'OK');
      return;
    }
    this.flag = true;
    this.email.sendEmail(this.data).subscribe(
      (response) => {
        console.log(response);
        this.flag = false;
        this.snak.open('Message Sent Successfully', 'OK');
      },
      (error) => {
        console.log(error);
        this.flag = false;
        this.snak.open('Error occured');
      }
    );
  }
}
