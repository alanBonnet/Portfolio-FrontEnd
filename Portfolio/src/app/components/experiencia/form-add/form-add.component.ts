import { Component, OnInit } from '@angular/core';
import { experience } from 'src/app/models/experience.mode';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
newExperience:experience = new experience("","","","")
expTitle = this.newExperience.position;
  constructor() { }

  ngOnInit(): void {
  }

}
