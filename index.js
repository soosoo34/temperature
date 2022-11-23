/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 let negativeTemp = [];
 let positiveTemp = [];
 
 const n = parseInt(readline()); // the number of temperatures to analyse
 var inputs = readline().split(' ');
 for (let i = 0; i < n; i++) {
     const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
     
     if ( t > 0) {
         positiveTemp.push(t)
     }
     if (t < 0) {
         negativeTemp.push(t)
     }
 }
 
 
 
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 // temp.sort((a ) => a + 0)
 
 negativeTemp.sort((a , b) => b - a )
 positiveTemp.sort((a , b) => a - b )
 console.error(positiveTemp.length);
 
 console.error(negativeTemp)
 console.error(positiveTemp)
 
 goodTemp = function (neg , pos) { 
     let negativeDelta = 0;
     let positiveDelta = 0;
     if (neg.length !== 0 ) {
         for ( let i = neg[0]; i !== 0 ; i ++) {
             negativeDelta ++;     
         }
     }
     if(pos.length !== 0) {
         for ( let i = pos[0] ; i !== 0 ; i --) {
             positiveDelta ++;
         }
     }
    
 
 
     if (negativeDelta > positiveDelta && positiveDelta) { // ok
     
         return pos[0]
     
     }
     
     if (negativeDelta < positiveDelta  && negativeDelta) { // ok
      
         return neg[0]
     }
     
     if (negativeDelta === positiveDelta && positiveDelta && negativeDelta ) { // ok
       
         return pos[0]
     }
 
     if ( pos.length == 0 && neg.length !== 0) {
 
         return neg[0]
       
     }
 
     if ( neg.length == 0 && pos.length !== 0) {
         return pos[0]
     } else {
      
         return 0;
     }
     
 }
 
 
 console.log(goodTemp(negativeTemp , positiveTemp));
 