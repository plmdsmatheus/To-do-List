import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { GradeComponent } from './grade/grade.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
 { path: 'lista', component: ListaComponent },
 { path: 'grade', component: GradeComponent },
 { path: 'calendario', component: CalendarioComponent },
 { path: '', redirectTo: '/lista', pathMatch: 'full' }
];

@NgModule({
 declarations: [
    AppComponent,
    ListaComponent,
    GradeComponent,
    CalendarioComponent
 ],
 imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }