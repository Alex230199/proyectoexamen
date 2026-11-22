import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Semaforo} from '../semaforo/semaforo';
import {RouterLink} from '@angular/router';



@Component({
  imports: [MatButtonModule, MatToolbarModule, RouterLink],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})
export class Menu {}
