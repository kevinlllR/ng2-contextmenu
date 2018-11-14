import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ContextmenuComponent } from './contextmenu.component';
import { ContextmenuDirective } from './contextmenu.directive';

@NgModule({
  imports: [
    CommonMoDULE
  ],
  declarations: [
    ContextmenuDirective,
    ContextmenuComponent
  ],
  bootstrap: [

  ],
  providers: [
  ],
  exports: [
    ContextmenuDirective,
    ContextmenuComponent
  ]
})
export class ContextmenuModule {
  constructor() {}

  static forChild(): ModuleWithProviders {
    return {
      ngModule: ContextmenuModule
    };
  }


}
