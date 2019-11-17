import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { CoincountComponent } from './coincount/coincount.component';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';


const routes: Routes = [{
                          path: '',
                          component: IndexComponent,
                        },
                        {
                          path: 'edit/:id',
                          component: EditComponent
                        },
                        {
                          path: 'new',
                          component: NewComponent
                        }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
