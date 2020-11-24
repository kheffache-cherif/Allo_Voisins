import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router}  from '@angular/router';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientWeb-Angular';

  constructor ( private router: Router ){ router.navigate(['/acceuil']);}

}

