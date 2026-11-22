import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  imports: [CommonModule, MatButtonModule],
  selector: 'app-semaforo',
  styleUrl: './semaforo.css',
  templateUrl: './semaforo.html',
})
export class Semaforo {}
