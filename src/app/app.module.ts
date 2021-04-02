import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CdkTableModule } from '@angular/cdk/table';


import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HerosListComponent } from './heros-list/heros-list.component';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppService } from './services/app.service';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HerosListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    CdkTableModule,
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
