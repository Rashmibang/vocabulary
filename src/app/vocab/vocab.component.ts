import {Component, OnInit} from '@angular/core';
import {ServiceService, Word} from '../service.service';

@Component({
  selector: 'app-vocab',
  templateUrl: './vocab.component.html',
  styleUrls: ['./vocab.component.css']
})
export class VocabComponent implements OnInit {
  text: Word;
  bgcolor: string[] = ['#b71c1c', '#880E4F', '#4A148C', '#311B92', '#006064', '#F9A825', '#7CB342', '#FB8C00', '#78909C', '#F48FB1'];
  randomcolval;

  constructor(private service: ServiceService) {
  }

  ngOnInit(): void {
    this.change();
  }

  change(): void {
    this.service.getWord().subscribe((wordMeaning: Word) => {
      this.randomcolval = this.bgcolor[Math.floor(Math.random() * this.bgcolor.length)];
      this.text = wordMeaning;
    });
  }
}
