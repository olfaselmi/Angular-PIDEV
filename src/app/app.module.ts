import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { DataTablesModule } from "angular-datatables";
import { AppComponent } from "./app.component";
import { ChatComponent } from "./components/chat/chat.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ForumComponent } from "./components/forum/forum.component";
import { HomeComponent } from "./components/home/home.component";
import { MapsComponent } from "./components/maps/maps.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { AddopportunityComponent } from "./components/opportunity/addopportunity/addopportunity.component";
import { EditopportunityComponent } from "./components/opportunity/editopportunity/editopportunity.component";
import { OpportunityComponent } from "./components/opportunity/opportunity.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { AddtravelComponent } from "./components/travel/addtravel/addtravel.component";
import { EdittravelComponent } from "./components/travel/edittravel/edittravel.component";
import { StatisticsComponent } from "./components/travel/statistics/statistics.component";
import { TravelComponent } from "./components/travel/travel.component";
import { EditplanningComponent } from "./components/travelplanning/editplanning/editplanning.component";
import { TravelplanningComponent } from "./components/travelplanning/travelplanning.component";
import { VeiwPlanningsComponent } from "./components/travelplanning/veiw-plannings/veiw-plannings.component";


const routes: Routes = [
  
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:DashboardComponent},
  {path:'forum', component:ForumComponent},
  {path:'chat',component:ChatComponent},
  {path:"travel",component:TravelComponent},
  {path:"edit",component:EdittravelComponent},
  {path:"travel/:id",component:TravelplanningComponent},
  {path:"view",component:VeiwPlanningsComponent},
  {path:"opportunity",component:OpportunityComponent},
  {path:"statistics",component:StatisticsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    ForumComponent,
    ChatComponent,
    TravelComponent,
    AddtravelComponent,
    EdittravelComponent,
    TravelplanningComponent,
    VeiwPlanningsComponent,
    OpportunityComponent,
    AddopportunityComponent,
    EditopportunityComponent,
    EditplanningComponent,
    StatisticsComponent,
    MapsComponent,
  
  ],
  imports: [
    BrowserModule,
   RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    DataTablesModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
