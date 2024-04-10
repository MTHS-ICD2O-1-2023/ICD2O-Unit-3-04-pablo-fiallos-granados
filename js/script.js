// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"


function enterClicked() {
  // input
  const temperatureFahrenheit = parseFloat(document.getElementById("temperatureFahrenheit").value)
  const temperatureCelcius = (temperatureFahrenheit - 32) * 5.0/9.0
  const temperatureCelciusRounded = temperatureCelcius.toFixed(2)
  // output
  document.getElementById("user-info").innerHTML =
    "temperature = " + temperatureCelciusRounded + "<sup>o</sup>C"
}