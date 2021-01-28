1. variable i will be printed because it is a global variable. This will actually be the length of the array, "prices".
2. discountedPrice will be printed. It is also a global variable. Specifically the discounted price of the last item in the array of prices will be printed.
3. finalPrice will be printed. It is also a global variable because of the var attribute.
4. It will return [50,100,150]. For every price in the array given we calculate its discounted price and add it to our output array, discounted.
5. An error will be created. i is declared within the for loop therefore it is not in the outer scope of the function.
6. The same issue occurs. because the variable discountedPrice was declared with let, we are unable to access the variable outside of the for loop.
7. 