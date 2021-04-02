import { Pays } from "./models/pays";

export const resolvers = {
  Query: {

    pays: () => Pays.find()
  }},