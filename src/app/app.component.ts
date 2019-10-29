import { Component } from '@angular/core';
import { TweetsService } from './tweets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tweets = [];
  public total = 0;
  public numberOfPages = 0;
  public query = {
    page: 1,
    size: 10,
    text: ''
  }

  constructor(private tweetsService: TweetsService) {

  }

  ngOnInit() {

    this.doQuery();

  }

  private search(v: string) {
    this.query.text = v;
    this.doQuery(true);
  }

  private doQuery(isSearch = false) {
    this.tweetsService.getTweets(this.query).subscribe(
      (result) => {
        this.total = result.total;
        this.numberOfPages = 10;
        if (isSearch === false) {
          this.tweets.push(...result.data)

        } else {
          this.tweets = result.data;
        }
      }
    )
  }

  public doPaginate(event) {
    this.query.page = event;
    this.doQuery(true);
  }
}
