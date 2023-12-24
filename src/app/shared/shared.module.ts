import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from './component/header/header.component';
import { CardComponent } from './component/card/card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SidebarComponent, HeaderComponent, CardComponent],

  exports: [SidebarComponent, HeaderComponent, CardComponent],
})
export class SharedModule {}
