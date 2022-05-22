import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StructureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
