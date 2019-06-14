for (i = 0; i < 8; i++) {

  let width;

 if (i % 2 == 0){
   width = " ";
 }

 else {
   width = "#";
 }

 for (j = 0; j < 8; j++) {

   if ((i + j) % 2 == 0) {

     char = "#";
     width += char;
   }
   else {
    char = " ";
    width += char;
   }
 }

 console.log(width);
}
