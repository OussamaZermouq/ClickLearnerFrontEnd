import { Component } from '@angular/core';
import { MessageService, SharedModule } from 'primeng/api';
import { FileUploadEvent } from 'primeng/fileupload';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}


@Component({
  selector: 'app-uploadresourcestocours',
  standalone: false,
  templateUrl: './uploadresourcestocours.component.html',
  styleUrl: './uploadresourcestocours.component.css'
})
export class UploadresourcestocoursComponent {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event:FileUploadEvent) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }

      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
}
