import React from 'react';

const Newsletter = ({ label = 'Subscribe', fields = ['email'], action }) =>

  <div id="mc_embed_signup">
    <form
      action={ action || "//global.us16.list-manage.com/subscribe/post?u=ab555efa78384cd5d0537ee96&amp;id=cebbfa7890" }
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        {
          // <label htmlFor="mce-EMAIL"></label><br/>
        }
        { fields.includes('name') ? <div><input
          type="text"
          name="NAME"
          className="text vspace-sm"
          id="mce-NAME"
          placeholder="full name"
          required
        /></div> : null }
        { fields.includes('email') ? <input
          type="email"
          name="EMAIL"
          className="email"
          id="mce-EMAIL"
          placeholder="email address"
          required
        /> : null }
        <div
          style={{ position: 'absolute', left: '-5000px' }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_ab555efa78384cd5d0537ee96_cebbfa7890"
            tabIndex="-1"
            value=""
          />
        </div>
        <div>
          <input
            type="submit"
            value={ label }
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button dark"
          />
        </div>
      </div>
    </form>
  </div>

export default Newsletter
