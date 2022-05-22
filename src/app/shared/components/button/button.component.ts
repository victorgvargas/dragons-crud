import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dgn-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() action?: Function;
  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
