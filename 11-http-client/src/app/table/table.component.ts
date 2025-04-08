import {Component} from '@angular/core';
import {Record, RecordService} from '../record.service';

@Component({
  selector: 'app-table',
  standalone: false,
  template: `
    <div class="p-2">
      <table class="table table-hover table-bordered">
        <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>DELETE</th>
        </tr>
        </thead>
        <tbody>
          @for (record of records; track record.id) {
            <tr>
              <td>{{ record.id }}</td>
              <td>{{ record.name }}</td>
              <td>
                <button (click)="deleteRecord(record.id)" class="btn btn-danger btn-sm">DELETE</button>
              </td>
            </tr>
          }
        </tbody>
        <tfoot *ngIf="!records.length">
        <tr>
          <td class="text-center" colspan="3">No Records Found</td>
        </tr>
        </tfoot>
      </table>
    </div>
  `,
  styleUrl: './table.component.scss'
})
export class TableComponent {

  records: Array<Record> = [];

  constructor(public recordService: RecordService) {
    this.recordService.getAllRecords()
      .subscribe(val => this.records = val);
  }

  deleteRecord(id: string) {
    this.recordService.deleteRecord(id)
      .subscribe({
        error: err => { alert("Failed to delete, try again")}
      });
  }
}
