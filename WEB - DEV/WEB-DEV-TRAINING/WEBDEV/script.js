    function add(){
        var x = document.getElementById('1').value;
        var y = document.getElementById('2').value;
        var sum = Number(x) + Number(y);
        
        alert('Sum is: '+sum)


    }

    function minus(){
        var x = document.getElementById('1').value;
        var y = document.getElementById('2').value;
        var sum = Number(x) - Number (y);

        alert ('Difference is ' + sum)

     
     }
     
     function multiply(){
         var x = document.getElementById('1').value;
         var y = document.getElementById('2').value;
         var sum = Number(x) * Number (y);

         alert ('Product is ' + sum)
      }
      function divide(){
          var x = document.getElementById('1').value;
          var y = document.getElementById('2').value;
          var sum = Number(x) / Number(y);

          alert ('Quotient ' + sum)

      }