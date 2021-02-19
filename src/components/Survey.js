import React, {useState} from 'react';

const Survey = () => {
  return(
    <div class="ui form">
    <div class="inline fields">
      <label for="fruit">Select your favorite fruit:</label>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="fruit" checked="" tabindex="0" class="hidden"/>
          <label>Apples</label>
        </div>
      </div>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="fruit" tabindex="0" class="hidden" />
          <label>Oranges</label>
        </div>
      </div>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="fruit" tabindex="0" class="hidden"/>
          <label>Pears</label>
        </div>
      </div>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="fruit" tabindex="0" class="hidden"/>
          <label>Grapefruit</label>
        </div>
      </div>
    </div>
    <div class="grouped fields">
      <label for="fruit">Select your second favorite fruit:</label>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="fruit" checked="" tabindex="0" class="hidden"/>
          <label>Apples</label>
        </div>
      </div>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="fruit" tabindex="0" class="hidden"/>
          <label>Oranges</label>
        </div>
      </div>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="fruit" tabindex="0" class="hidden"/>
          <label>Pears</label>
        </div>
      </div>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="fruit" tabindex="0" class="hidden"/>
          <label>Grapefruit</label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Survey;