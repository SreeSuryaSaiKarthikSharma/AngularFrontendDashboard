import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HighchartsChartModule } from 'highcharts-angular';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultModule } from './layouts/default/default.module';
import { HeaderComponent } from './shared/componentes/header/header.component';
import { FooterComponent } from './shared/componentes/footer/footer.component';
import { SidebarComponent } from './shared/componentes/sidebar/sidebar.component';
import { PostsComponent } from './modules/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    // PostsComponent,
    // HeaderComponent,
    // FooterComponent,
    // SidebarComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // HighchartsChartModule,
    MatButtonModule,
    DefaultModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
