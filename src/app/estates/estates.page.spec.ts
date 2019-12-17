import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstatesPage } from './estates.page';

describe('EstatesPage', () => {
  let component: EstatesPage;
  let fixture: ComponentFixture<EstatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
