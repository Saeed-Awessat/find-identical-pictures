import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import "rxjs/Rx";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { theGameService } from './shared/services/theGame.service';
import { GameStatusComponent } from './game-status/game-status.component';
import { StatusDetailsComponent } from './status-details/status-details.component';
import { MatrixComponent } from './matrix/matrix.component';
import { CardComponent } from './card/card.component';
import { HtmlSanitizerPipe } from './shared/pipes/html-sanitizer.pipe';
import { MemoryService } from './shared/services/memory.service';
import { CardsService } from './shared/services/cards.service';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//import { MatInputModule, MatButtonModule, MatCheckboxModule, MatIconModule } from "@angular/material";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        GameStatusComponent,
        StatusDetailsComponent,
        CardComponent,
        MatrixComponent,
        HtmlSanitizerPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        RouterModule,
        AppRoutingModule,
        AngularFontAwesomeModule
        //BrowserAnimationsModule,
        //MatInputModule,
        //MatButtonModule,
        //MatCheckboxModule,
        //MatIconModule


    ],
    providers: [theGameService, MemoryService, CardsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
