
// Initialize Algolia, requires installing Algolia dependencies:
// https://www.algolia.com/doc/api-client/javascript/getting-started/#install
//
// App ID and API Key are stored in functions config variables

const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
const ALGOLIA_SEARCH_KEY = functions.config().algolia.search_key;

const ALGOLIA_INDEX_NAME = 'Productos_KONGO';
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'demo_ecommerce',
  searchClient: algoliasearch('B1G2GM9NG0', 'aadef574be1f9252bb48d4ea09b5cfe5'),
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),
  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'brand',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
      <div class="col-md-12">
      <div class="row2">
        <div class="product">
         <h3 class="product-name"><a href="#">${ doc.data().Name }</a></h3>
          <div class="product-img" >
              <a href="#" >
                  <img src=${ doc.data().url } data-id="${doc.id}">
              </a>
          </div>
          <div class="product-body">
              <p class="product-category">${ doc.data().Category }</p>
              <h4 class="product-price">${ doc.data().TOTAL } COP <del class="product-old-price">${ doc.data().Precio } COP</del></h4>
     
          </div>
          <div class="product-btns">
              <a href="#">
                  <button class="edit-product" data-id="${doc.id}"><i class="fa fa-pencil"></i><span
                          class="tooltipp">Editar</span></button>
              </a>
              <a href="#">
                  <button class="delete-product" data-id="${doc.id}"><i class="fa fa-trash"></i><span
                          class="tooltipp">Eliminar</span></button>
              </a>
             </div>
          </div>
         </div>
       </div>
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
