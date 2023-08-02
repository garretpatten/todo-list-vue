import { v4 as uuid } from "uuid";

export class Task {
  id: string;
  name: string;
  details: string;

  constructor(name: string, details: string) {
    this.id = uuid();
    this.name = name;
    this.details = details;
  }
}
