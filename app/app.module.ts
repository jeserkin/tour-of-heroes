import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "./hero.service";
import { DashboardComponent } from "./dashboard.component";
import { SmilePipe } from "./smile.pipe";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    
    SmilePipe
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}