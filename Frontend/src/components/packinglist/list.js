import "./list.css"




export default function List () {

return (
<div class="container1">
  <h1>Travel Packing List</h1>
  <div class="items">
    <input  class="yeah" id="item1" type="checkbox" checked />
    <label class="love" for="item1">Essentials</label>

    <input class="yeah" id="item2" type="checkbox" />
    <label class="love" for="item2">Clothes</label>

    <input class="yeah" id="item3" type="checkbox" />
    <label class="love" for="item3">Passport</label>

    <input class="yeah" classname="yeah"id="item4" type="checkbox" />
    <label class="love" for="item4">Cards</label>

    <input class="yeah" classname="yeah" id="item5" type="checkbox" />
    <label  class="love" for="item5">Shoes</label>

    <input class="yeah" classname="yeah"id="item6" type="checkbox" />
    <label class="love" for="item6">Makeup</label>
    <input  class="yeah" id="item1" type="checkbox" checked />
    <label class="love" for="item1">Photocopy of Passport</label>

    <input class="yeah" id="item2" type="checkbox" />
    <label class="love" for="item2">Drivers Liscense</label>

    <input class="yeah" id="item3" type="checkbox" />
    <label class="love" for="item3">Camera</label>

    <input class="yeah" classname="yeah"id="item4" type="checkbox" />
    <label class="love" for="item4">Charger</label>

    <input class="yeah" classname="yeah" id="item5" type="checkbox" />
    <label  class="love" for="item5">Sunglasses</label>

    <input class="yeah" classname="yeah"id="item6" type="checkbox" />
    <label class="love" for="item6">Suncream</label>
    <input class="yeah" id="item2" type="checkbox" />
    <label class="love" for="item2">Refillable Water bottle</label>

    <input class="yeah" id="item3" type="checkbox" />
    <label class="love" for="item3">Powerbank</label>

    <input class="yeah" classname="yeah"id="item4" type="checkbox" />
    <label class="love" for="item4">Backpack</label>

    <input class="yeah" classname="yeah" id="item5" type="checkbox" />
    <label  class="love" for="item5">Travel Insurance</label>

    <input class="yeah" classname="yeah"id="item6" type="checkbox" />
    <label class="love" for="item6">Travel Towel</label>
    <input  class="yeah" id="item1" type="checkbox" checked />
    <label class="love" for="item1">Individual Grooming Needs</label>

   

    <h2 class="done" aria-hidden="true">Done</h2>
    <h2 class="undone" aria-hidden="true">Not Done</h2>
  </div>
</div>
) }