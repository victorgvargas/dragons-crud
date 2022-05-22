import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { tap } from 'rxjs';
import { DragonsService } from 'src/app/core/services/dragons.service';
import { Dragon } from '../../models/dragon.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  dragons: Dragon[] = [];

  constructor(private _dragonService: DragonsService) { }

  ngOnInit(): void {
    this._dragonService.getDragons().pipe(
      tap(dragons => this.dragons = dragons)
    ).subscribe();
  }

  

}
