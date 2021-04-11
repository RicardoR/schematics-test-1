import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-<%= dasherize(name) %>-component',
	templateUrl: './<%= dasherize(name) %>.component.html',
	styleUrls: ['./<%= dasherize(name) %>.component.scss'],
})
export class <%= classify(name) %>Component implements OnInit <% if (subscriptionManagement) {%>, OnDestroy <% }%> {

	<% if (subscriptionManagement) {%>
	private readonly subscription: Subscription = new Subscription();
	<% }%>
    
	constructor() { }

	ngOnInit(): void {
	}
    
	<% if (subscriptionManagement) {%>
	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
	<% }%>
}