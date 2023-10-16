# Fake Ecommerce App 
Welcome to the Fake Ecommerce App, a demonstration of an ecommerce platform where you can explore various products, search by name or category, and even add products to your shopping cart for checkout. This app is built using React and leverages several key technologies, including API Context, React Router Dom, Axios, React Icons, and Bootstrap. To populate the app with products, we've integrated the [Fake Store API](https://fakestoreapi.com/), which provides a collection of fictional products. 
## Prerequisites 
Before you can install this app on your machine, ensure you meet the following requirements: 
- Node.js LTS version. 
-  NPM LTS version. 
-  At least 400MB of free disk space. 
## Installation 
Follow these steps to get the app up and running on your local machine: 
1. Open your terminal and navigate to the desired directory where you want to store the project. 
2. Clone the project repository by running the following command: `git clone https://github.com/Kameha1011/react-ecommerce`
3. Change into the project directory: `cd react-ecommerce/`
4. Install the required dependencies by running: `npm install`
5. Finally, start the development server by running: `npm run dev`
6. Once the server is running, open your web browser and visit [localhost:5173](http://localhost:5173/) to explore the app.

Congratulations! You now have the app up and running on your local machine, and you're ready to make any customizations you desire.

## Project Structure

The `./src` folder contains the following key components:

-   **Components:** This folder holds generic components used throughout the app.
-   **Assets:** Here, you can find media assets like images.
-   **Context:** This folder manages API-related context, including the cart context.
-   **Routes:** It houses the main components that serve as parents for each route.
-   **main.jsx:** This file connects to the `index.html` file and renders `App.jsx`, and it also manages all the routes.
-   **App.jsx:** The core component that acts as the parent for all other components.
-   **Error.jsx:** This component is displayed when an error occurs.

## Main Features

-   Click the main carousel button to explore a list of all available products.
![allproducts](https://lh3.googleusercontent.com/pw/ADCreHdBaX3ML_qij9ttQn4DG9RJyFJn5pGkOnIyf23SGADZBDHnz8LVpSOasGvSS0eMfBZgXsow_s_0rdWaObN8ephHJypG7w7NjeWvl9LxcQJicjwqbU8LJGfvXPJ3wgS6U8mAlCRrsggEpapClkOv5sLT=w1427-h733-s-no?authuser=0)
-   Use the "Shop" button in the Navbar to navigate categories via a dropdown menu.
 ![choosecategory](https://lh3.googleusercontent.com/pw/ADCreHfBSPOZqTsvrG2IekQsLPBNG-NPG0QRONRHe_c4OkvZBlTH-bMtMoMw4R0_yRJM6AZp_PNy8bI_PpYWNi0cyUbEpcf3CijaWclVkByuhlQFpwWLYeBbxtbVbivRMplwdIqZ-qkVZnI_YYBBlut_18x7=w1416-h720-s-no?authuser=0)
-   Perform product searches by name using the search bar.
![search](https://lh3.googleusercontent.com/pw/ADCreHfJSS9KbRJJZxA5y7V8OzzxulQQ5QJ_jjoe2vdy_Cs1TsMz4tYngArXbTRivMIUYZoQxbXeA_27uFDyh4D8uxTqcGlZgqjtOecOqOmKCn5v6vlOvc9iFAPlumVAtoS7EpoQ-I_OzpUbQuOKhrvqZGJ3=w1421-h744-s-no?authuser=0)
-   Click "Shop Now" within the product detail to view and add items to your cart.


![detail](https://lh3.googleusercontent.com/pw/ADCreHctS7hlP_YiMcgRFAVtpR1305Fd4mUK5Vn-ddokIBFLzXXN1yVMc18wQtV5_J4Rp9OnEg9l9nCgwOoMUIj3HwoMF2XfnlLobXTkZgUPN5XqV_98H8ZYjq1kuuyOf6eXfaH2GlI_LqAVwpRuClQMe14E=w356-h649-s-no?authuser=0)
-   Inside the detail view, you can specify quantities and add products to your cart.
![add product](https://lh3.googleusercontent.com/pw/ADCreHcqmxsjbi5Ra1VDGGW1QSv3Ey9QaaJvyJOSR1PWZuL11DC8GIQSsl-Wc8tdyed7E6g1N5CGlz9aLK4e5Bpqqx-j1pcx8Lb8FdbE_5Pl62BNFpClzSLVCbKhzP7Rr3Q3B3ehbiATyjIGXQUoK2faDFgq=w1424-h605-s-no?authuser=0)
-   Access your current cart by clicking the cart icon. Here, you can review and delete products or proceed to checkout.
![cart button](https://lh3.googleusercontent.com/pw/ADCreHdJxHFNreqUyPvX7HtJwarMRoMZ2ovuwy4EhIBNIwj0bgfNjZ_zPyBiGC9bak1ymJeIc08iV19OctXlOKvy5HVd9jyWc197l0f1y3w69OjCDUqfeSj9xsppMIoAPMYhr80izDmzL5ECgGMQwFHYcDsH=w1408-h702-s-no?authuser=0)
![current cart](https://lh3.googleusercontent.com/pw/ADCreHc5telf0fh24Lk2l-X8hjCG4wHmG-cIFIXBLTnFRi5w6zB2h_VpmOQbiVz0oOfTWG1wInoSIRPMtqv6rTmQJredHAx0vgB-slyQCIh5HKsxhCCneOdJF-F3fpexhPAZ3n2imU9Bq1eVJq2IMvGO46Hd=w1425-h737-s-no?authuser=0)
We hope you enjoy exploring our Fake Ecommerce App! If you have any questions or feedback, please don't hesitate to reach out
