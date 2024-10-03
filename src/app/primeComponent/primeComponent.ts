import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from "@angular/common";
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    exports: [
        ButtonModule,
        SidebarModule,
        CardModule,
        RippleModule,
        StyleClassModule,
        AvatarModule,
        MenubarModule,
        BadgeModule,
        InputTextModule
        
    ]
})
export class PrimeComponentModule { }
