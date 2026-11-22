import { Routes } from '@angular/router';
import { Semaforo} from './semaforo/semaforo';


export const routes: Routes = [
    { path: '', redirectTo: 'semaforo', pathMatch: 'full' },
    { path: 'semaforo', component: Semaforo}
];
