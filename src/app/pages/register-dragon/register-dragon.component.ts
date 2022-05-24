import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DragonsService } from 'src/app/core/services/dragons.service';

@Component({
  selector: 'dgn-register-dragon',
  templateUrl: './register-dragon.component.html',
  styleUrls: ['./register-dragon.component.scss']
})
export class RegisterDragonComponent implements OnInit {
  dragonForm = this._fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required]
  });

  constructor(private _fb: FormBuilder, private _dragonsService: DragonsService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.dragonForm.valid) {
      this._dragonsService.createDragon(this.dragonForm.value);
      this._router.navigate(['/home']);
    } else {
      alert("Invalid dragon! Please insert name and type");
    }
  }

}
