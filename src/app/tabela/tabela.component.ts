import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],

})


export class TabelaComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name','raca','idade'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
 
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));


    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' 
    ;

  return {
    id: id.toString(),
    name: name,
    idade: Math.round(Math.random() * 15).toString(),
    raca: raca[Math.round(Math.random() * (raca.length - 1))],
  };
}
 


const raca: string[] = [
  "Labrador Retriever",
"Golden Retriever",
"Bulldog Inglês",
"Beagle",
"Poodle",
"Pastor Alemão",
"Yorkshire Terrier",
"Boxer",
"Dachshund (Teckel)",
"Rottweiler",
"Shih Tzu",
"Chihuahua",
"Pug",
"Husky Siberiano",
"Doberman",
"Bichon Frisé",
"Schnauzer Miniatura",
"Border Collie",
"Cocker Spaniel",
"Great Dane (Dogue Alemão)"
];
const NAMES: string[] = [
'Bella',
'Max',
'Charlie',
'Daisy',
'Rocky',
'Lucy',
'Bailey',
'Toby',
'Sophie',
'Cooper',
'Mia',
'Oliver',
'Cody',
'Ruby',
'Bear',
'Lily',
'Milo',
'Sadie',
'Leo',
'Bella',
'Winston',
'Gracie',
'Zeus',
'Penny',
'Hunter',
'Ivy',
'Tucker',
'Mia',
'Chester',
'Olive',
'Gus',
'Willow',
];


export interface UserData {
  id: string;
  name: string;
  idade: string;
  raca: string;
}
