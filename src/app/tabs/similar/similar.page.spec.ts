import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SimilarPage } from './similar.page';

describe('SimilarPage', () => {
  let component: SimilarPage;
  let fixture: ComponentFixture<SimilarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SimilarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
