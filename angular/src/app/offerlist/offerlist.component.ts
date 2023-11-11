import {Component} from '@angular/core';

@Component({
  selector: 'app-offerlist',
  templateUrl: './offerlist.component.html',
  styleUrls: ['./offerlist.component.css']
})
export class OfferlistComponent {

  public test = [
    {name: "Matti Silvennoinen", availability: "Available today 17-23", bags: "2 bags", distance: "3min / 2.0km"},
    {name: "Mikko Kivinen", availability: "Available today 17-20", bags: "3 bags", distance: "1min / 0.5km"},
    {name: "Jorma Parola", availability: "Available today 13-14", bags: "2 bags", distance: "4 min / 3.0km"},
    {name: "Eros Ramazzotti", availability: "Available today 17-19", bags: "1 bag", distance: "2min / 0.7km"},
    {name: "Eero Kakko", availability: "Available today 20-22", bags: "4 bags", distance: "3min / 1.4km"}
  ];

}
