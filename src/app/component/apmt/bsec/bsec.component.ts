import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-bsec',
  templateUrl: './bsec.component.html',
  styleUrls: ['./bsec.component.css']
})

// C0sCWCWXXSEJ_XdAEJ2gv5kE3TKiJNkpabyZ3FmgpHup6LmAflG5UZ0FDPco8PqYb1QaZgeyHixffTTlJ260gw
// fFqrFRZjaUnY10a6lfoRmfqmgY31FKMx-vH6uw60LTpUQF789nwbN7aEcWX4XcQu
export class BsecComponent {
 // Define properties to bind to form fields
 selectedService: string = '';
 selectedProvider: string = '';
 appointmentDateTime: string = '';
 yourName: string = '';
 email: string = '';
 phoneNumber: string = '';

 constructor(private dataService: DataService) {}

 onSubmit() {
   console.log('Service:', this.selectedService);
   console.log('Provider:', this.selectedProvider);
   console.log('Appointment Date & Time:', this.appointmentDateTime);
   console.log('Your Name:', this.yourName);
   console.log('Email:', this.email);
   console.log('Phone Number:', this.phoneNumber);

   this.dataService.getData().subscribe((data) => {
    console.log('Data from the API:', data);
  });
  
 }






}




