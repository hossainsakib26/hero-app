import {Injectable} from '@angular/core';
//import observable for data, [of is a rxjs function symbol
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

//personal created imports
import {Hero} from "../modal/hero";
import {MessageService} from "../../../app/common-needs/services/message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl: string = 'http://localhost:3000'; //url to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private messageService: MessageService, private http: HttpClient) {
  }

  getHeroes(): Observable<Hero[]> {
    const url = this.heroesUrl + '/heroes';
    const datas = this.http.get<Hero[]>(url).pipe(
      tap(_heroes => this.log(`fatched/got heroes`)),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
    return datas;
  }

  /* GET heroes by name contains on search */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([])
    }
    const url = this.heroesUrl + `/heroes?name_like=${term}`;
    const datam = this.http.get<Hero[]>(`${url}`).pipe(
      tap(
        x => x.length ?
          this.log(`found heroes matching "${term}"`) : this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>(`SearchHeroes`, []))
    );
    return datam;
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const hero = this.http.get<Hero>(this.heroesUrl + `/heroes/${id}`).pipe(
      tap(_hero => this.log(`fatch/get hero id = ${id}`)),
      catchError(this.handleError<Hero>('getHero'))
    );
    return hero;
  }

  /*PUT: update hero on the server and using put method */
  updateHero(hero: Hero): Observable<any> {
    const serverUrl = this.heroesUrl + '/heroes/'
    // put has 3 parameters url, object and options
    return this.http.put((serverUrl + `${hero.id}`), hero, this.httpOptions).pipe(
      tap(_hero => this.log(`Updated hero id = ${hero.id} Updated Name: ${hero.name}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    const serverUrl = this.heroesUrl + '/heroes'
    return this.http.post<Hero>(serverUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id = ${newHero.id}`)),
      catchError(this.handleError<Hero>(`addHero`))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = this.heroesUrl + `/heroes/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(selectedHero => this.log(`deleted hero ${selectedHero.id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`)
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

}
