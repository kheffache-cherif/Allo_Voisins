import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { BiensService } from '../biens.service';

@Component({
  selector: 'app-ajout-bien',
  templateUrl: './ajout-bien.component.html',
  styleUrls: ['./ajout-bien.component.css'],
})
export class AjoutBienComponent implements OnInit {
  ajoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bienService: BiensService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    console.log(this.ajoutForm.value);
    this.bienService.ajoutBiens(this.ajoutForm.value).subscribe((ret) => {
      console.log(ret);
    });
  }
  // initialiser le formullaire à la creation du component
  initForm() {
    this.ajoutForm = this.formBuilder.group({
      nom: '',
      descriptif: '',
      lienPhoto: '',
      prixNeuf: '',
      motClef: '',
    });
  }
}
