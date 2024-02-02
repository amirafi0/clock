let form = document.querySelector('.form')

form.addEventListener('submit', function(e){
    e.preventDefault();

   let fnam = e.target.fnam.value;
   let lnam = e.target.lnam.value;
   let mail = e.target.mail.value;
   let country = e.target.country.value;
   let address = e.target.address.value;
  

let info={
    fnam,lnam, mail, country, address
}


console.log(info)

})


