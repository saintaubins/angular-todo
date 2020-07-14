import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WEB_URL } from 'src/app/app.constants';


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
    return this.http.get<HelloWorldBean>(`${WEB_URL}/hello-world-bean`);
    //console.log("Execute Hello World Bean Service")
  }
  //http://localhost:8080/hello-world/path-variable/in28minutes

  executeHelloWorldBeanServiceWithPathVariable(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(`${WEB_URL}/hello-world/path-variable/${name}`,
    //{headers}
    );
    //console.log("Execute Hello World Bean Service")
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'in28minutes'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
