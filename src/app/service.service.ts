import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


export interface Words {
  [key: number]: Word;
}

export interface Meaning {
  pos: string;
  description: string;
}

export interface Word {
  word: string;
  meaning: Meaning[];
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) {
  }

  getWord(): Observable<Word> {
    const quoteId = Math.floor(Math.random() * 10) + 1;
    return this.http.get<Word>('https://vocab-6e138-default-rtdb.firebaseio.com/' + quoteId + '.json');
  }

  MaxKey(): Observable<number> {
    return this.http.get('https://vocab-6e138-default-rtdb.firebaseio.com/.json?shallow=true').pipe(
      map(res => Object.keys(res).length)
    );
  }

  AddNewWordToFirebase(data): any {
    //console.log(data);
    const word = data.word;
    const meaning: Meaning[] = [
      {pos: data.type, description: data.meaning}];

    const payload: Word = {word, meaning};

    this.MaxKey().subscribe(key => {
      const newKey = key + 1;
      this.http.put(`https://vocab-6e138-default-rtdb.firebaseio.com/${newKey}.json`, payload).subscribe(obj => {
          //console.log(obj);
        }
      );
    });
  }
}
