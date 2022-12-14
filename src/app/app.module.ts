import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu.component";
import { ConfigService } from "./config.service";

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
