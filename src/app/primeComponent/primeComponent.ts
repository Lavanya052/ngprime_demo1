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
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    exports: [
        ButtonModule,SidebarModule,
        CardModule,RippleModule,
        StyleClassModule,AvatarModule,
        MenubarModule,BadgeModule,
        InputTextModule,TableModule,
        DialogModule,InputNumberModule,
        FormsModule,RadioButtonModule,
        RatingModule,TagModule,
        DropdownModule,FileUploadModule,
        InputTextModule,ToastModule,
        ToolbarModule,ConfirmDialogModule,
        InputTextModule

        
        
    ]
})
export class PrimeComponentModule { }
