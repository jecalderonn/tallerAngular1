import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  constructor(public messageService: MessageService) { }
}
