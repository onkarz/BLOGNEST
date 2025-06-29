import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsforfutureComponent } from './blogsforfuture.component';

describe('BlogsforfutureComponent', () => {
  let component: BlogsforfutureComponent;
  let fixture: ComponentFixture<BlogsforfutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsforfutureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsforfutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
