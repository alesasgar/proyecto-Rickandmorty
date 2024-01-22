import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, FormSearchComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
