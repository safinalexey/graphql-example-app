import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LaunchDetailsGQL} from '../services/spacexGraphql.service';
import {map, switchMap} from 'rxjs/operators';

@Component({
	selector: 'app-launch-details',
	templateUrl: './launch-details.component.html',
	styleUrls: ['./launch-details.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent implements OnInit {

	constructor(private readonly launchDetailService: LaunchDetailsGQL,
				private readonly route: ActivatedRoute) {
	}

	launchDetails$ = this.route.paramMap.pipe(
		switchMap(params => {
			return this.launchDetailService.fetch({id: params.get('id')});
		}),
		map(res => res.data.launch)
	);

	ngOnInit() {
	}

}
