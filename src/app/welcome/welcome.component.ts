import { ActivatedRoute } from '@angular/router';
//package com.in28minuets.springboot.web;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';


//@ComponentScan(
//  value = "com.in28minuets.sprinboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  welcomeMessageFromService:string
  name = ''
  //String message = "Some Welcome Message"

  //public SpringBootFirstWebApplication() {
  
  //ActivatedRoute
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  // void init() {
  ngOnInit() {
    //COMPILATION ERROR this.message = 5
    //console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      );
      
      //console.log('last line of getWelcomMessage')
      //console.log('get welcome message')
    }
    
    getWelcomeMessageWithParameter() {
      //console.log(this.service.executeHelloWorldBeanService());
      this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    //console.log('last line of getWelcomMessage')
    //console.log('get welcome message')
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message
  }

}
