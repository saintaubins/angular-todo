import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class HelloWorldBean {
  constructor(public message:string) {}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("Execute Hello World Bean Service")
  }
  //http://localhost:8080/hello-world/path-variable/in28minuets

  executeHelloWorldBeanServiceWithPathVariable(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    //console.log("Execute Hello World Bean Service")
  }
}
