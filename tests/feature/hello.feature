Feature: Saying hello
 
Scenario: Calling Hello service
  Given I want to be greeted
  When I call the service
  Then the message should be "Go Serverless Webpack (Typescript) v1.0! Your function executed wrongly!"