import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-my-component-component',
	templateUrl: './my-component.component.html',
	styleUrls: ['./my-component.component.scss'],
})
export class MyComponentComponent implements OnInit, OnDestroy {
	private readonly subscription: Subscription = new Subscription();

	constructor() { }

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
