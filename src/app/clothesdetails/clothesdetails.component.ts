import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothesService } from '../clothes/clothes.service';
import { Clothes } from '../clothes/clothes.model';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-clothesdetails',
  templateUrl: './clothesdetails.component.html',
  styleUrls: ['./clothesdetails.component.css']
})
export class ClothesdetailsComponent implements OnInit {

  id!: number;
  //clothing!: Clothes;
  item: { id: number; picture: string; name: string; type: string; manufacturer: string; rating: string; size: string; price: number; date: string; } | undefined;

  constructor(
    private route: ActivatedRoute,
    private clothesService: ClothesService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idParam = params['id'];
      if (idParam !== null && idParam !== undefined) {
        this.id = +idParam;
        this.fetchProduct(this.id);
      } else {
        console.warn('ID parameter is null or undefined');
      }
    });
  }



  /*addToCart(item: { id: number; picture: string; name: string; type: string; manufacturer: string; rating: string; size: string; price: number; date: string; }) {
    //this.cart.addToCart(item);
    console.log(item);
    }
    */













  fetchProduct(id: number) {
    const clothes = [
        {
            id: 1 ,
            picture: "slika1.png",
            name: "Duks",
            type: "Radna odeca",
            manufacturer: "Texon",
            rating: "4",
            size: "XL",
            price: 2499.99,
            date: "Oct 29, 2021"
        },
        {
            id: 2 ,
            picture: "slika2.png",
            name: "Jakna",
            type: "Radna odeca",
            manufacturer: "Under Armour",
            rating: "4",
            size: "S",
            price: 3799.99,
            date: "Oct 1, 2022"
        },
        {
            id: 3 ,
            picture: "slika3.png",
            name: "Jakna",
            type: "Radna odeca",
            manufacturer: "Vermont",
            rating: "4",
            size: "S",
            price: 3899.99,
            date: "Nov 4, 2021"
        },
        {
            id: 4 ,
            picture: "slika4.png",
            name: "Pantalone",
            type: "Radna odeca",
            manufacturer: "Arhive",
            rating: "4",
            size: "S",
            price: 2947.28,
            date: "Dec 8, 2021"
        },
        {
            id: 5 ,
            picture: "slika5.png",
            name: "Treger pantalone",
            type: "Radna odeca",
            manufacturer: "Arhive",
            rating: "4",
            size: "XS",
            price: 2000.00,
            date: "Apr 2, 2024"
        },
        {
            id: 6 ,
            picture: "slika6.png",
            name: "Pantalone",
            type: "Radna odeca",
            manufacturer: "Max Evo",
            rating: "4",
            size: "S",
            price: 3382.05,
            date: "Aug 27, 2022"
        },
        {
            id: 7 ,
            picture: "slika7.png",
            name: "Jakna",
            type: "Radna odeca",
            manufacturer: "Iskra",
            rating: "4",
            size: "M",
            price: 9600.00,
            date: "Oct 22, 2023"
        },
        {
            id: 8 ,
            picture: "slika8.png",
            name: "Prsluk",
            type: "Radna odeca",
            manufacturer: "Stenberg",
            rating: "4",
            size: "XL",
            price: 4500.66,
            date: "Aug 21, 2023"
        },
        {
            id: 9 ,
            picture: "slika9.png",
            name: "Jakna",
            type: "Radna odeca",
            manufacturer: "HTZ",
            rating: "4",
            size: "S",
            price: 6599.99,
            date: "May 30, 2023"
        },
        {
            id: 10 ,
            picture: "slika10.png",
            name: "Pantalone",
            type: "Radna odeca",
            manufacturer: "Iskra",
            rating: "4",
            size: "S",
            price: 5999.99,
            date: "Apr 8, 2022"
        },
        {
            id: 11 ,
            picture: "slika11.png",
            name: "Majica",
            type: "Sportska odeca",
            manufacturer: "Adidas",
            rating: "4",
            size: "L",
            price: 3432.01,
            date: "Feb 26, 2022"
        },
        {
            id: 12 ,
            picture: "slika12.png",
            name: "Trenerke",
            type: "Sportska odeca",
            manufacturer: "Sergio Tacchini",
            rating: "4",
            size: "M",
            price: 7999.99,
            date: "Dec 7, 2022"
        },
        {
            id: 13 ,
            picture: "slika13.png",
            name: "Sorc",
            type: "Sportska odeca",
            manufacturer: "Air Jordan",
            rating: "4",
            size: "S",
            price: 9199.00,
            date: "Jul 10, 2022"
        },
        {
            id: 14 ,
            picture: "slika14.png",
            name: "Sorc",
            type: "Sportska odeca",
            manufacturer: "Speedo",
            rating: "4",
            size: "S",
            price: 4394.39,
            date: "Oct 7, 2022"
        },
        {
            id: 15 ,
            picture: "slika15.png",
            name: "Duks",
            type: "Sportska odeca",
            manufacturer: "Sergio Tacchini",
            rating: "4",
            size: "L",
            price: 4999.00,
            date: "Jun 17, 2023"
        },
        {
            id: 16 ,
            picture: "slika16.png",
            name: "Prsluk",
            type: "Sportska odeca",
            manufacturer: "Adidas",
            rating: "4",
            size: "L",
            price: 3260.48,
            date: "Dec 21, 2022"
        },
        {
            id: 17 ,
            picture: "slika17.png",
            name: "Pantalone",
            type: "Sportska odeca",
            manufacturer: "The North Face",
            rating: "4",
            size: "XL",
            price: 6999.00,
            date: "Jul 21, 2023"
        },
        {
            id: 18 ,
            picture: "slika18.png",
            name: "Dres",
            type: "Sportska odeca",
            manufacturer: "Nike",
            rating: "4",
            size: "XS",
            price: 3799.27,
            date: "May 24, 2021"
        },
        {
            id: 19 ,
            picture: "slika19.png",
            name: "Bermude",
            type: "Sportska odeca",
            manufacturer: "Champion",
            rating: "4",
            size: "S",
            price: 4599.00,
            date: "Sep 19, 2023"
        },
        {
            id: 20 ,
            picture: "slika20.png",
            name: "Polo",
            type: "Sportska odeca",
            manufacturer: "Ellesse",
            rating: "4",
            size: "S",
            price: 2199.54,
            date: "Apr 18, 2024"
        },
        {
            id: 21 ,
            picture: "odelo.png",
            name: "Set",
            type: "Svecana odeca",
            manufacturer: "Zara",
            rating: "4",
            size: "M",
            price: 15000.00,
            date: "Jul 19, 2021"
        },
        {
            id: 22 ,
            picture: "slika22.png",
            name: "set",
            type: "Svecana odeca",
            manufacturer: "Zara",
            rating: "4",
            size: "XL",
            price: 6000.42,
            date: "Nov 3, 2022"
        },
        {
            id: 23 ,
            picture: "slika23.png",
            name: "Majica",
            type: "Svecana odeca",
            manufacturer: "Gucci",
            rating: "4",
            size: "XXL",
            price: 1630.77,
            date: "Sep 22, 2023"
        },
        {
            id: 24 ,
            picture: "slika24.png",
            name: "set",
            type: "Svecana odeca",
            manufacturer: "Dior",
            rating: "4",
            size: "XXL",
            price: 3645.75,
            date: "Mar 4, 2023"
        },
        {
            id: 25 ,
            picture: "slika25.png",
            name: "set",
            type: "Svecana odeca",
            manufacturer: "Chanel",
            rating: "4",
            size: "XXL",
            price: 7000.33,
            date: "Dec 5, 2022"
        },
        {
            id: 26 ,
            picture: "slika26.png",
            name: "kosulja",
            type: "Svecana odeca",
            manufacturer: "Armani",
            rating: "4",
            size: "M",
            price: 8000.00,
            date: "Jul 17, 2022"
        },
        {
            id: 27 ,
            picture: "slika27.png",
            name: "kosulja",
            type: "Svecana odeca",
            manufacturer: "Nike",
            rating: "4",
            size: "XS",
            price: 4500.00,
            date: "Oct 18, 2022"
        },
        {
            id: 28 ,
            picture: "slika28.png",
            name: "Kosulja",
            type: "Svecana odeca",
            manufacturer: "Calvin Klein",
            rating: "4",
            size: "XXL",
            price: 5074.55,
            date: "Oct 3, 2021"
        },
        {
            id: 29 ,
            picture: "slika29.png",
            name: "set",
            type: "Svecana odeca",
            manufacturer: "Calvin Klein",
            rating: "4",
            size: "L",
            price: 6200.12,
            date: "Jul 22, 2023"
        },
        {
            id: 30 ,
            picture: "set1.png",
            name: "set",
            type: "Svecana odeca",
            manufacturer: "Emporio Armani",
            rating: "4",
            size: "XXL",
            price: 1331.42,
            date: "Jul 30, 2021"
        },
        {
            id: 31 ,
            picture: "slika31.png",
            name: "Majica",
            type: "Letnja odeca",
            manufacturer: "Nike",
            rating: "4",
            size: "XS",
            price: 6200.76,
            date: "Dec 12, 2023"
        },
        {
            id: 32 ,
            picture: "slika32.png",
            name: "dres",
            type: "Letnja odeca",
            manufacturer: "Nike",
            rating: "4",
            size: "M",
            price: 9849.89,
            date: "Jun 5, 2022"
        },
        {
            id: 33 ,
            picture: "slika33.png",
            name: "Majica",
            type: "Letnja odeca",
            manufacturer: "Nike",
            rating: "4",
            size: "M",
            price: 3909.38,
            date: "Oct 11, 2022"
        },
        {
            id: 34 ,
            picture: "slika34.png",
            name: "Duks",
            type: "Letnja odeca",
            manufacturer: "Nike",
            rating: "4",
            size: "XS",
            price: 8646.14,
            date: "Dec 4, 2022"
        },
        {
            id: 35 ,
            picture: "slika35.png",
            name: "Sorc",
            type: "Letnja odeca",
            manufacturer: "Under Armour",
            rating: "4",
            size: "S",
            price: 2845.97,
            date: "May 18, 2023"
        },
        {
            id: 36 ,
            picture: "slika36.png",
            name: "Sorc",
            type: "Letnja odeca",
            manufacturer: "Puma",
            rating: "4",
            size: "M",
            price: 6640.60,
            date: "Apr 23, 2023"
        },
        {
            id: 37 ,
            picture: "slika37.png",
            name: "Sorc",
            type: "Letnja odeca",
            manufacturer: "Nike Jordan",
            rating: "4",
            size: "L",
            price: 4950.00,
            date: "Mar 13, 2023"
        },
        {
            id: 38 ,
            picture: "slika38.png",
            name: "Sorc",
            type: "Letnja odeca",
            manufacturer: "Nike",
            rating: "4",
            size: "S",
            price: 9030.06,
            date: "Mar 12, 2024"
        },
        {
            id: 39 ,
            picture: "slika39.png",
            name: "Sorc",
            type: "Letnja odeca",
            manufacturer: "Jordan",
            rating: "3",
            size: "XXL",
            price: 3665.03,
            date: "Mar 31, 2023"
        },
        {
            id: 40 ,
            picture: "slika40.png",
            name: "Sorc",
            type: "Letnja odeca",
            manufacturer: "Air Jordan",
            rating: "2",
            size: "XL",
            price: 8298.43,
            date: "Nov 22, 2022"
        }
  


  ];

    this.item = clothes.find(p => p.id === id);
    if (!this.item) {
      console.warn(`Clothing item with ID ${id} not found`);
    }
  }
}
