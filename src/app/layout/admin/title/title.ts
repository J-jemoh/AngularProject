import { Component,OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.scss'
})
export class TitleComponent implements OnInit{
constructor(private router: Router, private route: ActivatedRoute, private titleService: Title) {
    this.router.events
      .pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let currentRoute: ActivatedRoute | null = this.route.root;
        let title = '';
        do {
          const childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach(routes => {
            if (routes.outlet === 'primary') {
              title = routes.snapshot.data['breadcrumb']||'KRCS';
              currentRoute = routes;
            }
          });
        } while (currentRoute);
        this.titleService.setTitle( title + ' | Meal System');
      });
  }

  ngOnInit() {
  }
}
