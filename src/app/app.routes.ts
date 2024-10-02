import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { StartComponent } from './start/start.component';
import { ConvertComponent } from './convert/convert.component';
import { TaskComponent } from './task/task.component';

export const routes: Routes = [
    { path: "index", title: "Start", component: StartComponent },
    { path: "", redirectTo: "index", pathMatch: 'full' },
    { path: "convert", title: "Konvertering", component: ConvertComponent },
    { path: "task", title: "Om uppgiften", component: TaskComponent },
    { path: "**", title: "404", component: NotFoundComponent }
];
