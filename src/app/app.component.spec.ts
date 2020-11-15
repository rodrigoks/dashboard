import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { DashboardModule } from './dashboard/dashboard.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        DashboardModule
      ]
    }).compileComponents();
  });
  
});
