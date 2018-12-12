import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatFormFieldModule, MatListModule,
    MatInputModule, MatButtonModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppCharacterListComponent } from './app-character-list/app-character-list.component';
import { AppSidenavContentComponent } from './app-side-nav/app-sidenav-content/app-sidenav-content.component';
import { FormsModule } from '@angular/forms';
import { AppSideNavComponent } from './app-side-nav/app-sidenav.component';
import { CharacterPipe } from './character/character.pipe';


@NgModule({
    declarations: [
        AppComponent,
        AppCharacterListComponent,
        AppSidenavContentComponent,
        AppSideNavComponent,
        CharacterPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatListModule,
        MatInputModule,
        MatButtonModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
