import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth, Storage } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  signedIn: boolean;
  user: any;
  greeting: string;
  s3Result: string;
  constructor( private amplifyService: AmplifyService ) {
    var service= this.amplifyService;  
    this.amplifyService.authStateChange$
/*           .subscribe(authState => {
              this.signedIn = authState.state === 'signedIn';
              if (!authState.user) {
                  this.user = null;
              } else {
                  this.user = authState.user;
                  this.greeting = "Hello " + this.user.username;
              }
      }); */
      Storage.put('test.png','Hello')
      .then(result=>this.s3Result="done")
      .catch(err=>this.s3Result="error");
      
  }
}
