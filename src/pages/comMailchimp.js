import React from 'react';

const ComMailchimp = () => {
    const [inputValue, setInputValue] = React.useState('');

    return <div id="mc_embed_shell">
        <div id="mc_embed_signup">
            <form
                action="https://hesabsystem.us17.list-manage.com/subscribe/post?u=ecfcd17fe69f3b016ac09f555&amp;id=aec1d22681&amp;f_id=0076c2e1f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
            >
                <div
                    id="mc_embed_signup_scroll"
                    className='mt-4 d-flex justify-content-center justify-content-xl-start mx-auto mx-xl-0 m-0 p-2 rounded-pill border border-1'
                    style={{ width: '500px' }}
                    width="500px"
                >
                    <div className="mc-field-group w-100">
                        <label className="d-none" htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                        <input
                            type="email"
                            name="EMAIL"
                            className="required email form-control border-0 px-4 py-3 shadow-none rounded-end rounded-5"
                            id="mce-EMAIL"
                            required=""
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Work email"
                        />
                    </div>
                    <div className="mc-field-group d-none">
                        <label htmlFor="mce-SOFTWARE">Current Accounting Software <span className="asterisk">*</span></label>
                        <input type="text" name="SOFTWARE" className="required text" id="mce-SOFTWARE" required="" />
                        <span id="mce-SOFTWARE-HELPERTEXT" className="helper_text">The accounting and inventory management software currently u</span>
                    </div>
                    <div className="mc-field-group d-none">
                        <label htmlFor="mce-LANGUAGE">Language <span className="asterisk">*</span></label>
                        <input type="text" name="LANGUAGE" className="required text" id="mce-LANGUAGE" required="" />
                        <span id="mce-LANGUAGE-HELPERTEXT" className="helper_text">The default language you or your business uses for communica</span>
                    </div>
                    <div id="mce-responses" className="clear foot d-none">
                        <div className="response d-none" id="mce-error-response"></div>
                        <div className="response d-none" id="mce-success-response"></div>
                    </div>
                    <div aria-hidden="true" className="d-none">
                        <input type="text" name="b_ecfcd17fe69f3b016ac09f555_aec1d22681" tabIndex="-1" />
                    </div>
                    <div className="optionalParent">
                        <div className="clear foot">
                            <input
                                type="submit"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                                className="button btn btn-success border-0 px-4 py-3 text-nowrap rounded-start rounded-5"
                                value="Get free access"
                            />
                            <p className='d-none'>
                                <a href="http://eepurl.com/i0YSFQ" title="Mailchimp - email marketing made easy and fun">
                                    <span>
                                        <img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" />
                                    </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
}

export default ComMailchimp;