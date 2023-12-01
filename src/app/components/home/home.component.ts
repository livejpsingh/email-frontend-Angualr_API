import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private snack: MatSnackBar) {}

  ngOnInit(): void {}

  btnClick() {
    console.log('This is Mail Sender App');
    this.snack.open('Hello Welcome to this app');
  }
}
