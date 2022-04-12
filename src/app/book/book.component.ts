import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../services/api.service';
MatTableDataSource

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  isDisplay = false //reservation list
  reservationForm !: FormGroup;
  formBuilder: any;
  openBox(){
    this.isDisplay = !this.isDisplay;
  }

  displayedColumns: string[] = ['from', 'to', 'departure'];
  dataSource! : MatTableDataSource<any>;

  constructor(private fb : FormBuilder, private api : ApiService) {} //reservation form

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      from: [''],
      to: [''],
      departure: ['']   
    }),
    this.getAllReservations();
  }

  addReservation(){ //adds reservation
    // console.log(this.reservationForm.value);
    if(this.reservationForm.valid){
      this.api.postReservation(this.reservationForm.value)
      .subscribe({
        next:(res)=>{
          alert('Reservation added');
          this.reservationForm.reset();
        },
        error:()=>{
          alert('Reservation not added, please try again')
        }
      })
    }
  }

  getAllReservations(){ //display reservations
    this.api.getReservation()
    .subscribe({
      next:(res)=>{
        // console.log(res);
        this.dataSource = new MatTableDataSource(res);
                
      },
      error:(err)=>{
        alert('error fetching data!')
      }
    })
  }

}
