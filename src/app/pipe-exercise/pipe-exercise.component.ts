import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TruncatePipe } from '../custom-pipes/truncate.pipe';


@Component({
  standalone: true,
  selector: 'app-pipe-exercise',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './pipe-exercise.component.html',
  styleUrl: './pipe-exercise.component.scss'
})

export class PipeExerciseComponent {
  title: string = 'Zadanie';
  username: string = 'Szymańska';
  progress: number = 0.7589;
  today = new Date();
  price = 1234.567;
  description = 'Angular to świetny framework do budowy aplikacji frontendowych.';
  user = { name: 'Ala', age: 25, country: 'Polska' };
  rating = 4.2356;
  person = {
    name: 'Ewa',
    age: 30,
    job: 'Developer'
  };
  percentage = 0.1589;
  amount = 1234.5678;
  todayx = new Date();
  pricex = 5678.999;
  ratingx = 0.5874;
  itemCount = 9;
  eventTime = new Date();
  fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
  discount = 0.12;
  balance = 4500.8;
}
