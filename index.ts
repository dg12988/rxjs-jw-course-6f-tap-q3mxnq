import { Observable, of } from "rxjs";
import { filter, map } from "rxjs/operators";

// of creates source Observable
of(1, 7, 3, 6, 2).pipe(
  map(value => value * 2),
  filter(value => value > 5),  
).subscribe(value => console.log('Output:', value));