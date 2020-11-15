import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./services/api.service";
import { DataGridComponent } from "./data-grid/data-grid.component";
import { CardTmpDirective } from "./directives/card-tmp.directive";
import { GridFilterDirective } from './directives/grid-filter.directive';
import { LoaderService } from './services/loader.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DataGridComponent,
    CardTmpDirective,
    GridFilterDirective
  ],
  bootstrap: [AppComponent],
  providers: [ApiService, LoaderService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
