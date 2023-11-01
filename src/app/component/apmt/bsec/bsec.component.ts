import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-bsec',
  templateUrl: './bsec.component.html',
  styleUrls: ['./bsec.component.css']
})
export class BsecComponent implements OnInit {
  selectedService: string = '';
  selectedProvider: string = '';
  appointmentDateTime: string = '';
  yourName: string = '';
  email: string = '';
  phoneNumber: string = '';

  access_tok = '';

  constructor(private dataService: DataService, private http: HttpClient) {}

  ngOnInit() {
    this.authenticateWithSpotify();
  }

  authenticateWithSpotify() {
    const client_id = 'fe979c392cbc41fc89b5dc21e7f8a826';
    const client_secret = '743bb020c08f4b318a3c242d1e407925';

    // Encode the client ID and client secret using the 'btoa' function
    const credentials = btoa(`${client_id}:${client_secret}`);

    const authOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
    };

    const body = 'grant_type=client_credentials';

    // Make the authentication request to Spotify
    this.http.post('https://accounts.spotify.com/api/token', body, authOptions).subscribe(
      (response: any) => {
        console.log(response.access_token);
        this.access_tok = response.access_token;
        console.log(this.access_tok);
      },
      (error) => {
        console.error('Spotify authentication error:', error);
      }
    );
  }

  getArtist() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.access_tok}`
    });

    this.http.get('https://api.spotify.com/v1/search?q=dua&type=artist', { headers }).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.error('Spotify artist search error:', error);
      }
    );
  }

  onSubmit() {
    console.log('Service:', this.selectedService);
    console.log('Provider:', this.selectedProvider);
    console.log('Appointment Date & Time:', this.appointmentDateTime);
    console.log('Your Name:', this.yourName);
    console.log('Email:', this.email);
    console.log('Phone Number:', this.phoneNumber);

    // Call the getArtist function
    this.getArtist();
  }
}
