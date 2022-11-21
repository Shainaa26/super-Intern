fetch("https://random-data-api.com/api/users/random_user?size=10").then((data)=>{
   return data.json();
   console.log(data);
} ). then((objectData)=> {
   console.log(objectData[5]);
   let tableData="";
   objectData.map((values)=> {
      tableData+=`  
        <tr>
      <td> ${values.username} </td>
      <td>${values.email}</td>
      <td>${values.gender}</td>
      <td>${values.address.city}</td>
      <td>${values.subscription.status}</td>
  </tr>`;
   });
   document.getElementById("table_body").innerHTML= tableData;
} )   
$(document).ready(function() {
   $('#myTable').DataTable( {
       responsive: true,
       "pageLength": 10
   } );
} );

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName('tr');
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td){
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function myFunction2() {
   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById('myInput2');
   filter = input.value.toUpperCase();
   table = document.getElementById("myTable");
   tr = table.getElementsByTagName('tr');
   for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td")[1];
     if (td){
       txtValue = td.textContent || td.innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1) {
         tr[i].style.display = "";
       } else {
         tr[i].style.display = "none";
       }
     }
   }
 }

 function myFunction3() {
   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById('myFilter');
   filter = input.value.toUpperCase();
   table = document.getElementById("myTable");
   tr = table.getElementsByTagName('tr');
   for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td")[3];
     if (td){
       txtValue = td.textContent || td.innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1) {
         tr[i].style.display = "";
       } else {
         tr[i].style.display = "none";
       }
     }
   }
 }
      
 function myFunction4() {
   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById('myFilter2');
   filter = input.value.toUpperCase();
   table = document.getElementById("myTable");
   tr = table.getElementsByTagName('tr');
   for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td")[4];
     if (td){
       txtValue = td.textContent || td.innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1) {
         tr[i].style.display = "";
       } else {
         tr[i].style.display = "none";
       }
     }
   }
}

