import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
})
export class SwitchComponent {
  cube = faCube;
  isInThree: boolean = false;

  @Output() DimensionChangeEvent = new EventEmitter<boolean>();

  changeDimension() {
    this.isInThree = !this.isInThree;
    this.DimensionChangeEvent.emit(this.isInThree);
  }
}
