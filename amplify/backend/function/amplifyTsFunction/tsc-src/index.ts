import {Greeter} from 'saffi-first-type-script-package';
export const handler = async (event: any = {}): Promise<any> => {
    const greeter= Greeter('Everyone');
    console.log(greeter);
    const response = JSON.stringify(event, null, 2);
    return response;
}