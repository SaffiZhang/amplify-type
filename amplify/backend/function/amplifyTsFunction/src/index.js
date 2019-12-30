"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_common_1 = require("dist/aws-common");
exports.handler = async (event = {}) => {
    const response = JSON.stringify(event, null, 2);
    const srv = new aws_common_1.AwsCommonService();
    const result = srv.sayHello('John Doe');
    console.log(result);
    return response + ' ' + result;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90c2Mtc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQWlEO0FBRXBDLFFBQUEsT0FBTyxHQUFHLEtBQUssRUFBRSxRQUFhLEVBQUUsRUFBZ0IsRUFBRTtJQUM3RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEQsTUFBTSxHQUFHLEdBQUcsSUFBSSw2QkFBZ0IsRUFBRSxDQUFDO0lBQ25DLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixPQUFPLFFBQVEsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0FBQ2pDLENBQUMsQ0FBQyJ9