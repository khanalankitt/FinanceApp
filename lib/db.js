const Username = process.env.USERNAME;
const Password = process.env.PASSWORD;
export const ConnectionStr = `mongodb+srv://${Username}:${Password}@staking.cianjhk.mongodb.net/Finance?retryWrites=true&w=majority&appName=Staking`;