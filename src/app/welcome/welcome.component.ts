//package com.in28minuets.springboot.web;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';


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
  //public SpringBootFirstWebApplication() {
  constructor() { }

  // void init() {
  ngOnInit() {
    console.log(this.message)
  }

}
