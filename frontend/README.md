
created amazona folder
created template folder
created index.html
added default HTML code
link to style.css
created header, main and footer
style elements
Display Products
<br />
created products div
add product attributes
add link, image, name and price
created React App
npx created-react-app frontend
npm start
Remove unused files
copy index.html content to App.js
copy style.css content to index.css
replace class with className
Share Code On Github
Initialize git repository
<br />
Commit changes
created github account
created repo on github
connect local repo to github repo
push changes to github
created Rating and Product Component
created components/Rating.js
created div.rating
style div.rating, span and last span
created Product component
Use Rating component
<br />
Build Product Screen
Install react-router-dom
Use BrowserRouter and Route for Home Screen
created HomeScreen.js
Add product list code there
created ProductScreen.js
Add new Route from product details to App.js
created 3 columns for product image, info and action
created Node.JS Server
run npm init in root folder
Update package.json set type: module
Add .js to imports
npm install express
created server.js
add start command as node backend/server.js
require express
created route for / return backend is ready.
move products.js from frontend to backend
created route for /api/products
return products
run npm start
Load Products From Backend
edit HomeScreen.js
define products, loading and error.
created useEffect
define async fetchData and call it
install axios
get data from /api/products
show them in the list
created Loading Component
created Message Box Component
use them in HomeScreen
Install ESlint For Code Linting
install VSCode eslint extension
npm install -D eslint
run ./node_modules/.bin/eslint --init
created ./frontend/.env
Add SKIP_PREFLIGHT_CHECK=true
Add Redux to Home Screen
npm install redux react-redux
created store.js
initState= {products:[]}
reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
export default createdStore(reducer, initState)
Edit HomeScreen.js
shopName = useSelector(state=>state.products)
const dispatch = useDispatch()
useEffect(()=>dispatch({type: LOAD_PRODUCTS, payload: data})
Add store to index.js
