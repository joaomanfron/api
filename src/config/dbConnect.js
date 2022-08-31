import mongoose from "mongoose";

mongoose.connect("mongodb+srv://joao:g25X3dxpXtwlHbG1@api.ytqzkp1.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;