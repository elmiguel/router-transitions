import { DashboardModule } from './dashboard.module';

describe('AdminModule', () => {
  let adminModule: DashboardModule;

  beforeEach(() => {
    adminModule = new DashboardModule();
  });

  it('should create an instance', () => {
    expect(adminModule).toBeTruthy();
  });
});
