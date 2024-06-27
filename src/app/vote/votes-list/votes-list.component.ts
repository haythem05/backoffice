import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vote } from '../models/vote.model';
import { VoteService } from '../services/vote.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';



@Component({
  selector: 'app-votes-list',
  templateUrl: './votes-list.component.html',
  styleUrls: ['./votes-list.component.css']
})
export class VotesListComponent implements OnInit {
  dataSource: MatTableDataSource<Vote> = new MatTableDataSource<Vote>([]); // Data source for the table
  displayedColumns: string[] = ['voteId', 'cardValue','voteTimestamp','confidenceLevel', 'delete']; // Displayed columns

  constructor(private voteService: VoteService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getVotes();
  }

  getVotes(): void {
    this.voteService.getAllVotes().subscribe(votes => {
      this.dataSource = new MatTableDataSource<Vote>(votes); // Set up data source
    });
  }
  
  deleteVote(voteId: number): void {
    this.voteService.deleteVote(voteId).subscribe(
      () => {
        console.log('Vote deleted successfully');
        // Optionally, refresh the list of votes after deletion
        this.getVotes();
      },
      (error) => {
        console.error('Failed to delete vote:', error);
    });
  }
  openConfirmationDialog(voteId: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '250px';
    dialogConfig.data = 'Are you sure you want to delete this item?';
    dialogConfig.position = { top: '50%', left: '50%' };
    dialogConfig.panelClass = 'custom-dialog-container'; // Add custom styling if necessary
  
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
  

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        // Call your deleteVote method if user confirmed
        this.deleteVote(voteId);
      } else {
        // User canceled the action
      }
    });
  }
}
