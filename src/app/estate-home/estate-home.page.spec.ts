import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstateHomePage } from './estate-home.page';

describe('EstateHomePage', () => {
  let component: EstateHomePage;
  let fixture: ComponentFixture<EstateHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstateHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
