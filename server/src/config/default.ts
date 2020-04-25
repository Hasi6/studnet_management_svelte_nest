
export interface Config {
  mongoURI: string;
  emailPassword: string;
  endPoint: string;
}


let databaseData: Config;
if (process.env.NODE_ENV === "production") {
  databaseData = {
    mongoURI:
      "mongodb+srv://Hasitha:fEOCl1YUUCod408Z@cluster0-qhpzc.azure.mongodb.net/test?retryWrites=true&w=majority",
    emailPassword: "semem2016",
    endPoint: "http://localhost:3000"
  };
} else {
  databaseData = {
    mongoURI: "mongodb://localhost:27017/nestjs",
    emailPassword: "semem2016",
    endPoint: "http://localhost:3000"
  };
}

export default databaseData;
