import { Component, OnInit } from '@angular/core';
import { Δ } from '../reactive.decorator';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Δ vm = {
    counter: 1,
    user: {
      name: 'Alex'
    }
  };

  count() {
    this.vm.counter++;
  }

  updateUserName() {
    this.vm.user.name = 'Alexey';
  }
}
