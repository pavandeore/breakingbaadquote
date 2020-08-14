let url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
let btn = document.querySelector('#btn1');
let container = document.querySelector('.container');
let newDiv = document.createElement('div');

async function getData(){

const data = await fetch(url)
const jdata = await data.json()

newDiv.innerHTML = `
    <div class="my-5" id="animate">
      <h3 class="text-danger">Author</h3>  <h5>${jdata[0].author}</h5>
      <h3 class="text-danger">Quote</h3> <h5> ${jdata[0].quote}</h5>
    </div>
`;
container.appendChild(newDiv);


}

btn.addEventListener('click',getData);




  