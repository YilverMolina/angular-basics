import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/classes/character';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  btnText: string = 'Add to Cart';
  characters: Character[] = [];
  filter: string = '';

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe(results => {
      this.characters = results;
    })
  }
}
