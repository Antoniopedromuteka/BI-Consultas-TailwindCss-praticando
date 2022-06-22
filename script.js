
var d;

const id = document.querySelector("#id");
const nome = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const genero = document.querySelector("#genero");
const data = document.querySelector("#data");
const morada = document.querySelector("#morada");
const provincia = document.querySelector("#provincia");


const btnSearch = document.querySelector("#btn-search");



  

btnSearch.addEventListener('click',(event) => {

    event.preventDefault();

   

    const numberOfBi = document.querySelector('#txt-numeroBi');

    //if(!numberOfBi) return;
 

        fetch("https://api.gov.ao/consultarBI/v2/?bi="+numberOfBi.value+"")
        .then((response) => response.json())
        .then(datas => pegar(datas))

  
 
})



function pegar(datas){

    console.log(datas);

    datas.map((item) => {
        
        nome.innerHTML = item.FIRST_NAME;
        id.innerHTML = item.ID_NUMBER;
        sobrenome.innerHTML = item.LAST_NAME;
        genero.innerHTML = item.GENDER_NAME;
        data.innerHTML = item.BIRTH_DATE;
        morada.innerHTML = item.BIRTH_MUNICIPALITY_NAME;
        provincia.innerHTML = item.BIRTH_PROVINCE_NAME;
    })


}
 
  