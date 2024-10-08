import React from 'react';

const ComMailchimp = () => {
    const [inputValue, setInputValue] = React.useState('');

    return <div id="mc_embed_shell">
        <div id="mc_embed_signup">
            <form
                action="https://hesabsystem.us17.list-manage.com/subscribe/post?u=ecfcd17fe69f3b016ac09f555&amp;id=aec1d22681&amp;f_id=0071c2e1f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate mt-4 d-flex justify-content-center justify-content-xl-start mx-auto mx-xl-0 m-0 p-2 rounded-pill border border-1"
                target="_self"
                noValidate
                style={{ maxWidth: '500px' }}
            >
                <input
                    type="email"
                    name="EMAIL"
                    className="form-control border-0 px-4 shadow-none rounded-end rounded-5"
                    id="mce-EMAIL"
                    required
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Work email"
                />
                <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button btn btn-success border-0 px-4 py-3 text-nowrap rounded-start rounded-5"
                    value="Get free access"
                />
            </form>
        </div>
    </div>
}

export default ComMailchimp;