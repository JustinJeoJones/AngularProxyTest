import { Component, OnInit } from '@angular/core';
import { Hi } from 'src/app/hi';
import { HiService } from '../hi.service';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {

  status: string = "loading";
  constructor(private hiService: HiService) { }

  ngOnInit(): void {
    this.hiService.getHi().subscribe((response:any) => {
      this.status = response.hi;
      console.log(response);
    });
  }

}
