import { Component, VERSION } from "@angular/core";
import { ApiService } from "./services/api.service";
import { LoaderService } from "./services/loader.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    private apiService: ApiService,
    public loaderService: LoaderService
  ) {}
  launcList: any = [];
  years: string[] = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020"
  ];
  state = {
    launch_year: "",
    launch_success: "",
    land_success: ""
  };
  ngOnInit() {
    this.loaderService.setLoaderState(true);
    this.apiService.getAllLaunches().subscribe(
      (data: any[]) => {
        this.launcList = data;
        this.loaderService.setLoaderState(false);
      },
      error => {
        this.loaderService.setLoaderState(false);
      }
    );
  }

  onStateChange(state) {
    console.log(state);
  }

  appliedFilter(event: any, filter) {
    event.preventDefault();
    event.stopPropagation();
    const val = event.target.getAttribute("value");
    if (
      val == null ||
      val == undefined ||
      filter == null ||
      filter == undefined
    ) {
      return;
    }
    if (this.state[filter] == val) {
      this.state[filter] = "";
    } else {
      this.state[filter] = val;
    }
    this.getFilteredList();
  }

  getFilteredList() {
    this.loaderService.setLoaderState(true);
    this.apiService.getAllLaunches(this.state).subscribe(
      data => {
        this.launcList = data;
        this.loaderService.setLoaderState(false);
      },
      error => {
        this.loaderService.setLoaderState(false);
      }
    );
  }
}
