const view = (orders) => `
<div id='confirm-form'>
<div id='form'>
    <h2 class='form-text-style'>Email</h2>
    <div class="form-group">
        <input type="email" placeholder="Your email" class="form-style field" id="email" >
    </div>
    <h2 class='form-text-style'>Phone</h2>
    <div class="form-group has-success">
      <input type="text" placeholder="8 (999) 123-45-64" class="form-style field" id="phone">
    </div>
    <h2 class='form-text-style'>Name</h2>
    <div class="form-group">
      <input type="text" class="form-style field" placeholder="Your Name" id="name">
    </div>
    <h2 class='form-text-style'>Address</h2>
    <div class="form-group">
      <input type="text" class="form-style field" placeholder="Your adress" id="address">
    </div>
    <h2 class='form-text-style'>Time</h2>
    <div class="form-group">
       <input type="datetime-local" class="form-style field" placeholder="Delivery time" id="time">
    </div>
    <div class="form-group">
      <div>
        <input type="radio" id="cash" name="radiobut" checked="">
        <label class="control-style" for="cash">Cash</label>
      </div>
      <div id='frst'>
        <input type="radio" id="card" name="radiobut">
        <label class="control-style" for="card">Card</label>
      </div>
    </div>
</div>
<div id='btn-submit'>
    <button type="submit" id="confirm" onclick='submit()'>подтвердить</button>
</div>
<div id='btn-go'>
    <button type="submit" id="confirm" onclick='go()'>Перейти на главную страницу</button>
</div>
</div>
`
export default view