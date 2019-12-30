import {AwsCommonService} from 'dist/aws-common';

export const handler = async (event: any = {}): Promise<any> => {
  const response = JSON.stringify(event, null, 2);
  const srv = new AwsCommonService();
  const result = srv.sayHello('John Doe');
  console.log(result);
  return response + ' ' + result;
};

