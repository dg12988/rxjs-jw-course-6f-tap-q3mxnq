import { Observable, of } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

// of creates source Observable
of(1, 7, 3, 6, 2).pipe(
  filter(value => value > 5),  
  tap(value => console.log('Spy:', value)),
  map(value => value * 2),  
).subscribe(value => console.log('Output:', value));