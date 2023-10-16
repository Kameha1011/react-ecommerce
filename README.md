
﻿

# Fake Ecommerce App

This is a fake ecommerce demo where you can see various products search by name and by category also you can add the products to a cart and go to checkout.

This app was made using React, API Context, React Router Dom, Axios, React Icons and Bootstrap. Also I used [Fake Store API](https://fakestoreapi.com/) to fill the app with fake products.

## Prerequisites
In order to install the app on your machine first you must meet the following requisites:

 - Node.js LTS version.
 - NPM LTS version.
 - Minimun space on your disk: 400MB.

## Installation

Follow the next steps to start testing the app on your machine:

 1. Open your terminal inside the folder you want the project to be copied in.
 2. Copy this command `git clone https://github.com/Kameha1011/react-ecommerce` and paste it into the terminal you opened and wait.
 3. Now enter the folder of the project by entering this command on your terminal `cd react-ecommerce/`.
 4. Run `npm install` on the terminal and wait.
 5. Finally run `npm run dev`, go to your browser and hit **localhost:5173**

Congratulations! :) now you can test the app on your machine and make the changes you wish.

## Files

Inside the **./src** folder we have:

 - Components folder, where we have all generic components that are placed all along the app with no specific order.
 - Assets folder, that as usual stores media used in the app, in our case we are just using images.
 - Context folder, stores API Context related code that at the moment we only have the cart context.
 - Routes folder, stores all main components that are parents of each route.
 - main.jsx file, connects to the index.html file and renders App.jsx, also it contains all of the routes.
 - App.jsx file, Parent of all components.
 - Error.jsx file, This component is renderes whenever an error occurs.

## Main Features

- By clicking the main button of the carousel you'll be redirected to the listing of all products.
 ![allproducts](https://lh3.googleusercontent.com/pw/ADCreHdej4oMbJ-Ixrch_VlBF0vvcRDEDF4aa0BrpjvEhmuq-aSw6d7TaC8u3e5sysMRxw5Bt6nV8XUWEmK2hBLDSyhTzReAL8ka5SVvS5rMWzIitlS1Tvgq9gGqjWjLu-UwBFoKqLzA5toFAP47U11jycC_=w1427-h733-s-no?authuser=0](https://lh3.googleusercontent.com/fife/AK0iWDxisTl39fENeG80qfkM5AjY3Z0_RAwNhY2CVF084siAzh5888FMYPMoekQ8GqJm3bMPtA0ed0k1KILK1lzYQD4dQh6oxetlSo2sIygu33hdke1TUdohQ3GsKUwWXHmbu3YU4z0B3lTehxk8VBY5fjW6XOJLgJEcM6PT99yheYBnHlc0kcGaV1grGT24t7ShXZZsmpt0KSSZlA6rXujuMAhKymR5RpFs8QveF8HY2ZEy-Z2qXgKFMV-J1Nhbo6xkRLP-EJRM4JY3uRXzxOoy7YifgjX-rcGaX9cksa_PyDBcsJ-HIdpD8hHJp0RH7w3VMEq0tKpVuzJtLEQzKdSCU7TIqe-s3GN1kh2TIjFNT0qdyKr2TZwlUG4rhQgLepBoaMR035VGmFDpEik-5GRfLyGV3NJAAEgcCP4pvUMI5R4ziEBIG2HnP-ShxG_h_R4wYnpsiKhWCXfC2GXf9w2BM7mXsVTag0TtH8bv3cDeL3tQWRRHUCBdHnyUM8gZ9fskWTPdbyExiqQiPrEDK_wf8zNElXsB0KvbpOzorOxXMeKg-w__YMzTcYwGmJa1p5uwCmJKZV0-reJ6ZF1JxLlZCgi8m1ZfJG9WHaXiFvB9SjB6-20OZ5j5YMtntUSGnypvmRC7S4M-tUWKvP76ORqp5hJp1J2WSnrYMFn05gZyLYKLjEL24C9gkI75CZD1qHwEQI5PWwsQosK4HrxH7RjHNMb8Y_pb1l_Fccw9MT9kP59QNhHsSjRWtC14_qVv4iPGVQCw81C5QIxSe4DVHzSXOKYAgspVQ6lmLPcYVUMvnDsDXxfDrrFcNZ2-pANmUDXS34JGBnNAoycADGI2ICdeyTmAX2TZfKLfUoM1JHQeazFKNoghKPWfNE7cWZaN2DrvmrOj76sMEHMkGqkl68XUvpO00dOip3SVF1sLUvpfACTe7-HPuq8LDoLlJr8CclQo8CoR2wW1ca10tzARuqMvUvwovmuTqTCXXmwIS3i3rhFbrY0WDuNkMkjjgKvSup_F77cxBfvVlKGfcu4Wxv_7TQ_dXoI-F7NsTaw0ukUp7BhNmnhqRR9A7ymM6_5o-RLq9dz8G-4jGvNwOuvJmvOv4UBCUtzVOe6eP2bBfvImJkEgWnuJIAmF43ssHYvEEUG2sAlc1glK_XH6udMgkZ31RI-hpRe8aNMOzVfFv7JoMMCMoo6Ot8qKR-4Dls2NQBXFj6qwmSEpCsX6GRQUTBXt8iYqGluQgpkzlAhTL8QYGF61vItTOQoAmF6Kzs25HT5veuXvIy6u5gOhi4wY519jtDh6fZS7V4uPCRgx0s0MJ8dcYtpX3GM5PEpbgMl9QxljcR6oXIT4XRw3pRxUzc0P-46B1qdIfG56ZxNHrg43N0XLWWp7UkbRocp4pHUPNSab3Sv6AKOmCTY__11g2WtGVbWlSWXr4DrrXOrZFlTx0ZkCgBZLqhVfqtb-NbM1aA8gISUb3TufUZ5Txhzn8weq8CGSqVok38GrXfnBmYLDwK2bXkZn-biCqjGqXHGZkM1VKhaPljgfQyks41BcKLAm108IRHKGFWJaQSdRAH8aBa3JsQ_Qy6V8vLKdFq_ZwV2AvzYEl6DwC35Q2SS-xnS8X14MzyD7CzrKo1gepcPy85ObWNNJNz5VU0HYqSrJjQBNNH6NrDyU5imiCa7q3wjsSBk60IS2LUZ4ykStsd-BiuOGv69MO10CNYUa9Zb2icU=s1427-w1427-h733-s-no?authuser=0)https://lh3.googleusercontent.com/fife/AK0iWDxisTl39fENeG80qfkM5AjY3Z0_RAwNhY2CVF084siAzh5888FMYPMoekQ8GqJm3bMPtA0ed0k1KILK1lzYQD4dQh6oxetlSo2sIygu33hdke1TUdohQ3GsKUwWXHmbu3YU4z0B3lTehxk8VBY5fjW6XOJLgJEcM6PT99yheYBnHlc0kcGaV1grGT24t7ShXZZsmpt0KSSZlA6rXujuMAhKymR5RpFs8QveF8HY2ZEy-Z2qXgKFMV-J1Nhbo6xkRLP-EJRM4JY3uRXzxOoy7YifgjX-rcGaX9cksa_PyDBcsJ-HIdpD8hHJp0RH7w3VMEq0tKpVuzJtLEQzKdSCU7TIqe-s3GN1kh2TIjFNT0qdyKr2TZwlUG4rhQgLepBoaMR035VGmFDpEik-5GRfLyGV3NJAAEgcCP4pvUMI5R4ziEBIG2HnP-ShxG_h_R4wYnpsiKhWCXfC2GXf9w2BM7mXsVTag0TtH8bv3cDeL3tQWRRHUCBdHnyUM8gZ9fskWTPdbyExiqQiPrEDK_wf8zNElXsB0KvbpOzorOxXMeKg-w__YMzTcYwGmJa1p5uwCmJKZV0-reJ6ZF1JxLlZCgi8m1ZfJG9WHaXiFvB9SjB6-20OZ5j5YMtntUSGnypvmRC7S4M-tUWKvP76ORqp5hJp1J2WSnrYMFn05gZyLYKLjEL24C9gkI75CZD1qHwEQI5PWwsQosK4HrxH7RjHNMb8Y_pb1l_Fccw9MT9kP59QNhHsSjRWtC14_qVv4iPGVQCw81C5QIxSe4DVHzSXOKYAgspVQ6lmLPcYVUMvnDsDXxfDrrFcNZ2-pANmUDXS34JGBnNAoycADGI2ICdeyTmAX2TZfKLfUoM1JHQeazFKNoghKPWfNE7cWZaN2DrvmrOj76sMEHMkGqkl68XUvpO00dOip3SVF1sLUvpfACTe7-HPuq8LDoLlJr8CclQo8CoR2wW1ca10tzARuqMvUvwovmuTqTCXXmwIS3i3rhFbrY0WDuNkMkjjgKvSup_F77cxBfvVlKGfcu4Wxv_7TQ_dXoI-F7NsTaw0ukUp7BhNmnhqRR9A7ymM6_5o-RLq9dz8G-4jGvNwOuvJmvOv4UBCUtzVOe6eP2bBfvImJkEgWnuJIAmF43ssHYvEEUG2sAlc1glK_XH6udMgkZ31RI-hpRe8aNMOzVfFv7JoMMCMoo6Ot8qKR-4Dls2NQBXFj6qwmSEpCsX6GRQUTBXt8iYqGluQgpkzlAhTL8QYGF61vItTOQoAmF6Kzs25HT5veuXvIy6u5gOhi4wY519jtDh6fZS7V4uPCRgx0s0MJ8dcYtpX3GM5PEpbgMl9QxljcR6oXIT4XRw3pRxUzc0P-46B1qdIfG56ZxNHrg43N0XLWWp7UkbRocp4pHUPNSab3Sv6AKOmCTY__11g2WtGVbWlSWXr4DrrXOrZFlTx0ZkCgBZLqhVfqtb-NbM1aA8gISUb3TufUZ5Txhzn8weq8CGSqVok38GrXfnBmYLDwK2bXkZn-biCqjGqXHGZkM1VKhaPljgfQyks41BcKLAm108IRHKGFWJaQSdRAH8aBa3JsQ_Qy6V8vLKdFq_ZwV2AvzYEl6DwC35Q2SS-xnS8X14MzyD7CzrKo1gepcPy85ObWNNJNz5VU0HYqSrJjQBNNH6NrDyU5imiCa7q3wjsSBk60IS2LUZ4ykStsd-BiuOGv69MO10CNYUa9Zb2icU=s1427-w1427-h733-s-no?authuser=0) 
- Select the *Shop button* on the Navbar to show the dropdown menu listing all the categories and navigate between them.
  ![choosecategory](https://lh3.googleusercontent.com/pw/ADCreHfBSPOZqTsvrG2IekQsLPBNG-NPG0QRONRHe_c4OkvZBlTH-bMtMoMw4R0_yRJM6AZp_PNy8bI_PpYWNi0cyUbEpcf3CijaWclVkByuhlQFpwWLYeBbxtbVbivRMplwdIqZ-qkVZnI_YYBBlut_18x7=w1416-h720-s-no?authuser=0)
 
- Type a product name into the search bar and hit the search button to get the matches.
![search](https://lh3.googleusercontent.com/pw/ADCreHfJSS9KbRJJZxA5y7V8OzzxulQQ5QJ_jjoe2vdy_Cs1TsMz4tYngArXbTRivMIUYZoQxbXeA_27uFDyh4D8uxTqcGlZgqjtOecOqOmKCn5v6vlOvc9iFAPlumVAtoS7EpoQ-I_OzpUbQuOKhrvqZGJ3=w1421-h744-s-no?authuser=0)
- If you want to see a product detail and save it to your cart click the *shop now* button.
![detail](https://lh3.googleusercontent.com/pw/ADCreHctS7hlP_YiMcgRFAVtpR1305Fd4mUK5Vn-ddokIBFLzXXN1yVMc18wQtV5_J4Rp9OnEg9l9nCgwOoMUIj3HwoMF2XfnlLobXTkZgUPN5XqV_98H8ZYjq1kuuyOf6eXfaH2GlI_LqAVwpRuClQMe14E=w356-h649-s-no?authuser=0)

- Inside the detail window you can select the quantity of the product and add it to the cart.
![add product](https://lh3.googleusercontent.com/pw/ADCreHcqmxsjbi5Ra1VDGGW1QSv3Ey9QaaJvyJOSR1PWZuL11DC8GIQSsl-Wc8tdyed7E6g1N5CGlz9aLK4e5Bpqqx-j1pcx8Lb8FdbE_5Pl62BNFpClzSLVCbKhzP7Rr3Q3B3ehbiATyjIGXQUoK2faDFgq=w1424-h605-s-no?authuser=0)
- Click the cart icon to see your current cart.
![cart button](https://lh3.googleusercontent.com/pw/ADCreHdJxHFNreqUyPvX7HtJwarMRoMZ2ovuwy4EhIBNIwj0bgfNjZ_zPyBiGC9bak1ymJeIc08iV19OctXlOKvy5HVd9jyWc197l0f1y3w69OjCDUqfeSj9xsppMIoAPMYhr80izDmzL5ECgGMQwFHYcDsH=w1408-h702-s-no?authuser=0)
- Here you can delete the products or go to checkout
![current cart](https://lh3.googleusercontent.com/pw/ADCreHc5telf0fh24Lk2l-X8hjCG4wHmG-cIFIXBLTnFRi5w6zB2h_VpmOQbiVz0oOfTWG1wInoSIRPMtqv6rTmQJredHAx0vgB-slyQCIh5HKsxhCCneOdJF-F3fpexhPAZ3n2imU9Bq1eVJq2IMvGO46Hd=w1425-h737-s-no?authuser=0)
