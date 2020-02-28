import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LaunchListComponent} from './launch-list/launch-list.component';
import {LaunchDetailsComponent} from './launch-details/launch-details.component';
import {RouterModule, Routes} from '@angular/router';
import {GraphQLModule} from './graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
	{path: '', component: LaunchListComponent},
	{path: ':id', component: LaunchDetailsComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		LaunchListComponent,
		LaunchDetailsComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		GraphQLModule,
		HttpClientModule,
		MatCardModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
