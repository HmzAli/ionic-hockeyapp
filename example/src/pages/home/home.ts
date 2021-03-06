import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HockeyApp } from "ionic-hockeyapp";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private hockeyApp:HockeyApp) {

  }

  public forceCrash() {
    this.hockeyApp.forceCrash();
  }

  public addMetaData() {
    this.hockeyApp.addMetaData({data: "Added Metadata to crash report"});
  }

  public trackEvent() {
    this.hockeyApp.trackEvent("Track Event Button");
  }

  public feedback() {
    this.hockeyApp.feedback();
  }

  public composeFeedback() {
    this.hockeyApp.composeFeedback(true,{feedback:"my feedback data"});
  }

  public checkHockeyAppUpdates() {
    this.hockeyApp.checkHockeyAppUpdates();
  }

}
