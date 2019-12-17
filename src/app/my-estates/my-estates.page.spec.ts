import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyEstatesPage } from './my-estates.page';

describe('MyEstatesPage', () => {
  let component: MyEstatesPage;
  let fixture: ComponentFixture<MyEstatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEstatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyEstatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
