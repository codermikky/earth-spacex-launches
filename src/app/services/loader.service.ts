import { Injectable } from "@angular/core";

@Injectable()
export class LoaderService {
  loader = false;
  constructor() {}

  setLoaderState(value) {
    this.loader = value;
  }
}
