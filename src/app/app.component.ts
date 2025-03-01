import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeExerciseComponent } from "./pipe-exercise/pipe-exercise.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PipeExerciseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pipes-angular';
}
