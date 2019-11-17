import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { CoincountComponent } from './coincount/coincount.component';
import { CoinService } from './coin.service';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    CoincountComponent,
    IndexComponent,
    EditComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
