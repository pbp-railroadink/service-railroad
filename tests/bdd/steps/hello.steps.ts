/* eslint-disable new-cap */
// /* eslint-disable require-jsdoc */
// import {binding, given, then, when} from 'cucumber-tsflow';
// // import {assert} from 'chai';
// // import {APIGatewayProxyEvent, Context, APIGatewayProxyResult} from 'aws-lambda';

import {Given, When, Then} from 'cucumber';

// // import {handler} from '@src/hello';

// @binding()
// export class HelloSteps {
//   // private result : APIGatewayProxyResult
//   // private resultBody : any

//   @given(/I want to be greeted/)
//   public wantToBeGreeted(): void {
//     // no-op
//   }

//   @when(/I call the service/)
//   public async callHelloService(): Promise<void> {
//     // Write code here that turns the phrase above into concrete actions
//     // const event = {} as APIGatewayProxyEvent;
//     // const context = {} as Context;
//     // const callback = () => {
//     //   null;
//     // };
//     // this.result = await handler(event, context, callback) as APIGatewayProxyResult;
//     // this.resultBody = JSON.parse(this.result.body);
//   }

//   @then(/the message should be "([^"]*)"/)
//   public theMessageShouldBe(expectedMessage: string): void {
//     // Write code here that turns the phrase above into concrete actions
//     // assert.equal(expectedMessage, this.resultBody.message);
//     if (expectedMessage) {
//       // no-op
//     }
//   }
// }


Given('I want to be greeted', function() {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('I call the service', function() {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the message should be {string}', function(string) {
  // Write code here that turns the phrase above into concrete actions
  if (string) {
    // no-op
  }
  return 'pending';
});
