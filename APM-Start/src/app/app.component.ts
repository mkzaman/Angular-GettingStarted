import {Component} from '@angular/core'
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
     <div class="container">
        <h1>
        {{pageTitle}}
        </h1>
        <div>
        <pm-products></pm-products>
        </div>
     </div>
  `,
  providers: [ProductService]
})
export class AppComponent{
  pageTitle: string = 'Acme Product Management'
}
