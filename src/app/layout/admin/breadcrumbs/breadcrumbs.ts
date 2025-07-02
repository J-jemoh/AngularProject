import { Component,OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  icon?: boolean;
  caption?: boolean;
  status?: boolean;
  url: string;
}

@Component({
  standalone: true,
  selector: 'app-breadcrumbs',
  imports: [RouterModule,CommonModule],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss'
})
export class Breadcrumbs implements OnInit {
tempState: string[] = [];
  breadcrumbs: Breadcrumb[] = [];


  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = [];
        this.tempState = [];
        let currentRoute: ActivatedRoute | null = this.route.root;
        let  url = '';
        do {
          const childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach(routes => {
            if (routes.outlet === 'primary') {
              const routeSnapshot = routes.snapshot;
              url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
              if (routes.snapshot.data['breadcrumb'] !== undefined) {
                let status = true;
                if (routes.snapshot.data['status'] !== undefined) {
                  status = routes.snapshot.data['status'];
                }

                let icon = false;
                if (routes.snapshot.data['icon']!== undefined) {
                  icon = routes.snapshot.data['icon'];
                }

                let breadcrumb_caption = false;
                if (routes.snapshot.data['breadcrumb_caption'] !== undefined) {
                  breadcrumb_caption = routes.snapshot.data['breadcrumb_caption'];
                }

                if (!this.tempState.includes(routes.snapshot.data['breadcrumb'])) {
                  this.tempState.push(routes.snapshot.data['breadcrumb']);
                  this.breadcrumbs.push({
                    label: routes.snapshot.data['breadcrumb'],
                    icon: icon,
                    caption: breadcrumb_caption,
                    status: status,
                    url: url
                  });
                }
              }
              currentRoute = routes;
            }
          });
        } while (currentRoute);
      });
  }

  ngOnInit() {
  }
}
