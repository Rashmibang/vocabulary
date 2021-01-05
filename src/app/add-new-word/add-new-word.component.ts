import {Component, OnInit} from '@angular/core';
import {ServiceService, Word} from '../service.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-new-word',
  templateUrl: './add-new-word.component.html',
  styleUrls: ['./add-new-word.component.css']
})

export class AddNewWordComponent implements OnInit {
  constructor(private service: ServiceService) {
  }

  ngOnInit(): void {
  }

  Addword(value: NgForm): any {
    //console.log(value.value);
    this.service.AddNewWordToFirebase(value.value);
  }
}
