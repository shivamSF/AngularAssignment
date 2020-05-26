import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
describe('HomeComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                HomeComponent
            ],
        }).compileComponents();
    }));
    it('should create the component', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    it('should be clickable', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        fixture.autoDetectChanges();
    });
});
//# sourceMappingURL=home.component.spec.js.map