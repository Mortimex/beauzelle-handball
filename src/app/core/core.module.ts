import {NgModule, Optional, SkipSelf} from '@angular/core';
import {PageNotFoundComponent} from './componants/page-not-found/page-not-found.component';
import {PublicModule} from '../public/public.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    SharedModule,
    PublicModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
