import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { FilesListComponent } from "./files-list/files-list.component";
import { FilesFormComponent } from "./files-form/files-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilesListComponent, FilesFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';
}
