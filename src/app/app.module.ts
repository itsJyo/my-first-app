import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// const appRoutes: Routes = [
//   { path: 'employee/:id',      component: EmployeeDetailsComponent },
//   {
//     path: 'employees',
//     component: EmployeeListComponent,
//     data: { title: 'Employee List' }
//   },
//   { path: '',
//     redirectTo: '/employees',
//     pathMatch: 'full'
//   },
// ];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(
    //   appRoutes      
    // ),
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
