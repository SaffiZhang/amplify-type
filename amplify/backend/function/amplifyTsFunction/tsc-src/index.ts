import {Greeter} from 'saffi-first-type-script-package';

import {AwsCommonService} from 'aws-common';

export const handler = async (event: any = {}): Promise<any> => {
  const greeter = Greeter('Everyone');
  console.log(greeter);
  const response = JSON.stringify(event, null, 2);

  const srv = new AwsCommonService();
  const result = srv.sayHello('John Doe');
  console.log(result);
  return response + ' ' + result;
};

