import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { Table5 } from './table5';
import { Rest1 } from './rest1';

@Injectable({
  providedIn: 'root'
})
export class MainLogicService {
  list = new BehaviorSubject<Table5[]>([])
  url:string="http://localhost:8080/table5s"

  constructor(private http:HttpClient) { }

  getTable5():Observable<Rest1>{
    return this.http.get<Rest1>(this.url);
  }

  postTable5(table5:Table5):Observable<Table5[]>{
    return this.http.post<Table5[]>(this.url,table5);
  }

  putTable5(table5:Table5):Observable<Table5[]>{
    return this.http.put<Table5[]>(table5._links.table5.href,table5);
  }

  deleteTable5(table5:Table5):Observable<Table5[]>{
    return this.http.delete<Table5[]>(table5._links.table5.href);
  }

  setList(insectList:Table5[]){
    this.list.next(insectList);
  }


  public inputs:string[] = ["", "", ""]
}