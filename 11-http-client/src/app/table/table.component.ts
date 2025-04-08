import { Component } from '@angular/core';

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
        <tbody></tbody>
        <tfoot>
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

}
