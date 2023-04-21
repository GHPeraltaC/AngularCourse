import { Component, OnInit } from '@angular/core';
import { transactionalityRequest } from 'src/app/interfaces/transactionalityRequest';
import { TransaccionalityService } from '../../services/transaccionality.service';

@Component({
  selector: 'app-page-transactionality',
  templateUrl: './page-transactionality.component.html',
  styleUrls: ['./page-transactionality.component.css']
})
export class PageTransactionalityComponent implements OnInit {

transacRequest: transactionalityRequest =  new transactionalityRequest();

  user: string

  constructor(private transacService:TransaccionalityService){

  }

  ngOnInit(){

    this.apiTransactionality()

  }

  apiTransactionality(){

    this.transacRequest.userAnalyst = "CBPERALTA"
    this.user = this.transacRequest.userAnalyst

    console.log("sss", this.transacRequest.userAnalyst)

    this.transacService.transaccionalityData(this.transacRequest).subscribe(
      x=>{
        console.log("Post:", x)
      }
    )
  }

}
