1. variable i will be printed because it is a global variable. This will actually be the length of the array, "prices".
2. discountedPrice will be printed. It is also a global variable. Specifically the discounted price of the last item in the array of prices will be printed.
3. finalPrice will be printed. It is also a global variable because of the var attribute.
4. It will return [50,100,150]. For every price in the array given we calculate its discounted price and add it to our output array, discounted.
5. An error will be created. i is declared within the for loop therefore it is not in the outer scope of the function.
6. The same issue occurs. because the variable discountedPrice was declared with let, we are unable to access the variable outside of the for loop.
7. finalPrice will get printed. It is defined in the scope and therefore able to get printed.
8. It will return [50,100,150]. For every price in the array given we calculate its discounted price and add it to our output array, discounted. Every variable is in the proper scope when it is ran.
9. An error will be created. i is declared within the for loop therefore it is not in the outer scope of the function.
10. An error will occur. This is because we cannot reassign finalPrice as it is a const.
11. An error will occur. This is because we cannot reassign finalPrice as it is a const.
12. It will not return anything. An error will occur. This is because we cannot reassign finalPrice as it is a const.
13a. student.name
13b. student["Grad Year"]
13c. student.greeting();
13d. student["Favorite Teacher"].name
13e. student.courseLoad[0]
14a. 32; string concatenation
14b. 1; you cannot string subtract. therefore it subtracts 2 from 3.
14c. 3; adding null is basically adding a 0
14d. 3null; treated as a string because the 3 is string.
14e. 4; true is treated like a 1, 3+1=4
14f. 0; they are both treated as a 0 because they are not really compatible with one another.
14g. 3undefined; same reason as 14d.
14h. NaN; undefined becomes NaN, we cannot subtract NaN

15a. True; string gets converted 2>1 is true
15b. False; '12' has more characters than '1'
15c. True; string gets converted to 2 and obviously 2==2 is true
15d. False; Strict compare '2' and 2. they are not equal
15e. False; true becomes 1, 1 is not equal to 2
15f. True; Boolean(2) gets converted to true. and true === true is true.

16. Both are used for comparing 2 variables. However, == converts the type of the variables to the same. === takes type into account.
17. "How are you?" gets printed. 2 does not equal 1. Boolean(2) is true. so thats why it will print that.
18. 
19. [6,8,10]; adds 2 and then multiplies by 2. to the original array
20. 
21. 1 then 4 then 3 then 2