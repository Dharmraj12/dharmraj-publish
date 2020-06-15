import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
export function modules() {
    return [
       MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule,
       MatInputModule, MatListModule, FormsModule,
       ReactiveFormsModule, MatMenuModule
    ];
  }
@NgModule({
    imports: modules(),
    exports: modules()
})
export class MaterialModule {
}
