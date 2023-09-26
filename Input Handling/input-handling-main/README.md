## Name 
Input Handling (SWEN 331 Project 2)

## Description 

This application will be used to validate books based on common book properties such as it's title and page numbers. 

For more information on this application, see the project overview here: https://www.se.rit.edu/~swen-331/projects/input-handling/
    * This application is currently in "Part 5" of 5 stages of development

## Installation 

user must have latest version of Node.js (Which is Currently 19.8.1)
    * Latest Version can be found here: https://nodejs.org/en

user must also install npm & jest from npm using the following commands in terminal
    * npm install 
    * npm install -g jest

user must also install jest-enviornment jsdom using the following command
    * npm install jest-environment-jsdom

user must also install sanitize-html using the following command
    * npm install sanitize-html

## Test Commands 

Current command used for tests is:
    npx jest --watchAll

It is prefered that if you have a second monitor, the test window should be moved there. 

## Known bugs and issues 
    1) Fixed problem from previous iteration tagged "part2" in GitLab. Had to reconfigure the .gitlab-ci.yml to specify which config file to use when ran through the Gitlab pipeline as well as added commands for installing jest and jest-enviornment jsdom before running test command.


## Support

The creator (Addo Davies Jr.) can be contacted directly at the following email address:
    asd1520@rit.edu

## Authors and Acknowledgment
Author: Addo Davies Jr. (asd1520)
Original project idea courtesy of Rochester Institute of Technology

## Project Status
Currently in Part 5 of 5 