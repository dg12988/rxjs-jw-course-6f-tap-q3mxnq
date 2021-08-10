import { Observable, of } from "rxjs";

// of creates source Observable
of(1, 7, 3, 6, 2).subscribe(value => console.log('Output:', value));