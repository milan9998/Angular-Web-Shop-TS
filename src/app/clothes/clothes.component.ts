import { Component, OnInit, ViewChild } from '@angular/core';
import { ClothesService } from './clothes.service';
import { Clothes } from './clothes.model';
import { MatCard } from '@angular/material/card';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSlider } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-clothes',
  templateUrl:'./clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  addToCart(product: Clothes) {
    this.clothesService.addToCart(product);
    this.snackBar.open('Proizvod dodat u korpu!', 'Zatvori', {
      duration: 3000, 
    });
  }

  clothes: Clothes[] = [];
  displayedColumns = ["id","picture", "manufacturer", "type", "price", "rating", "name", "size", "date", "cart"];
  clothesSource = new MatTableDataSource<Clothes>(this.clothes);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  minPrice: number = 0;
  maxPrice: number = 20000;
  startValue: number = 0;
  endValue: number = 20000;

  chooseClothes!: string;
  clothesList: string[] = ['Sportska odeca', 'Radna odeca', 'Svecana odeca', 'Letnja odeca'];
  filters: any = {
    category: [],
    clothes: ''
  };

  ratingFilterValue: number = 0;
  selectedSize:string[] = ['S','L','M','XL','XXL']

  constructor(private clothesService: ClothesService, private snackBar: MatSnackBar) {}

  


  ngOnInit(): void {
    this.clothesSource.data = this.clothesService.getClothes();
    console.log(this.clothesSource);

    this.filteredClothes = this.clothesService.getClothes()
    console.log(this.filteredClothes)

    
    this.applyPriceFilter();
    
  }

  ngAfterViewInit(): void {
    this.clothesSource.sort = this.sort;
    this.clothesSource.paginator = this.paginator;

    this.applyRatingFilter({ value: this.ratingFilterValue });
  }

  doFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase(); // Uklanja beline i pretvara u mala slova
    this.clothesSource.filterPredicate = (data: Clothes, filter: string) => {
      // Filtrira po svakom kolonu
      return data.id.toString().includes(filterValue) ||
             data.manufacturer.toLowerCase().includes(filterValue) ||
             data.type.toLowerCase().includes(filterValue) ||
             data.price.toString().includes(filterValue) ||
             data.rating.toString().includes(filterValue) ||
             data.name.toLowerCase().includes(filterValue) ||
             data.size.toLowerCase().includes(filterValue);
    };
    this.clothesSource.filter = filterValue;
  }
  /* doFilter(filterValue: string) {
    this.clothesSource.filter = filterValue.trim().toLowerCase();
  } */

  applyPriceFilter() {
    this.clothesSource.filterPredicate = (data, filter: string) => {
      // Uverite se da su sve ostale vrednosti filtera zadovoljene (ukoliko ih imate) i dodajte filtriranje po ceni
      const priceMatch = data.price >= this.startValue && data.price <= this.endValue;
  
      // Takođe proverite druge filtere koje možda imate aktivirane
      const matchCategory = this.filters.category.length === 0 || this.filters.category.includes(data.type);
      const matchSeason = !this.filters.clothes || data.type.toLowerCase().trim() === this.filters.clothes.toLowerCase().trim();
  
      // Vratite true ako svi uslovi filtera zadovoljavaju, uključujući opseg cena
      return priceMatch && matchCategory && matchSeason;
    };
  
    // Postavite neki filter tekst da bi filterPredicate bio aktiviran
    this.clothesSource.filter = JSON.stringify(this.filters);
  }
  

  /*applyRatingFilter(event: any) {
    // Ažuriranje vrednosti filtra za ocenu na osnovu vrednosti sa slajdera
    this.ratingFilterValue = event.value;

    // Primena filtera koji proverava samo ocenu
    this.clothesSource.filterPredicate = (data: Clothes, filter: string) => {
      // Provera da li je ocena predmeta veća ili jednaka minimalnoj oceni
      return data.rating >= this.ratingFilterValue;
    };

    // Postavljanje filtera kako bi filterPredicate bio aktiviran
    this.clothesSource.filter = this.ratingFilterValue.toString();
   // console.log(this.ratingFilterValue);
  }*/
   /* applyRatingFilter(event: any) {
    const rating = event.value;
    this.clothesSource.filterPredicate = (data, filter: string) => {
      return data.rating >= rating;
    };
    this.clothesSource.filter = rating.toString();
    
  }  */
    applyRatingFilter(event: any) {
      const rating = event.value;
      this.clothesSource.filterPredicate = (data, filter: string) => {
        return parseInt(data.rating) >= rating;
      };
      this.clothesSource.filter = rating.toString();
    }


  filteredClothes: Clothes[] = [];
 
  applySizeFilter(size: string) {
    // Ako nije odabrana nijedna veličina, resetujemo filter
    if (!size) {
      this.clothesSource.filter = '';
      return;
    }
  
    // Filtriramo podatke prema veličini
    this.clothesSource.filterPredicate = (data: Clothes, filter: string) => {
      return data.size === size;
    };
  
    // Postavljamo filter kako bi se primenio
    this.clothesSource.filter = size;
}

  applyFilterBySize(size: string) {
    this.filteredClothes = this.clothes.filter(clothing => clothing.size === size);
  }


  
  applyCategoryFilter(category: string, checked: boolean) {
    if (checked) {
      this.filters.category.push(category);
    } else {
      const index = this.filters.category.indexOf(category);
      if (index > -1) {
        this.filters.category.splice(index, 1);
      }
    }
    
    this.filterItems();
    
  }

  applySeasonFilter(clothes: string) {
    this.filters.clothes = clothes;
    this.filterItems();
  }

  filterItems() {
    this.clothesSource.filterPredicate = (data: Clothes, filter: string) => {
      const matchCategory = this.filters.category.length === 0 || this.filters.category.includes(data.type);
      const matchSeason = !this.filters.clothes || data.type.toLowerCase().trim() === this.filters.clothes.toLowerCase().trim();
      return matchCategory && matchSeason;
    };
    this.clothesSource.filter = JSON.stringify(this.filters); // Triggers filterPredicate
  }

  formatLabel(value: number): string {
    return `${value} RSD`;
  }

  formatLabel2(value: number): string {
    return `${value}`;
  }
}
