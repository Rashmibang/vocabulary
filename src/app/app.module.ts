import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {VocabComponent} from './vocab/vocab.component';
import {RouterModule, Routes} from '@angular/router';
import { WordlistComponent } from './wordlist/wordlist.component';
import { AddNewWordComponent } from './add-new-word/add-new-word.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: VocabComponent, pathMatch: 'full'},
  {path: 'listOfWords', component: WordlistComponent},
  {path: 'addNewWord', component: AddNewWordComponent}];

@NgModule({
  declarations: [
    AppComponent,
    VocabComponent,
    WordlistComponent,
    AddNewWordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
