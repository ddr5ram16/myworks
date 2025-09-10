import React from "react";

export default function Contact(){
    return(
        <section id="contact">
            <h2>Contact</h2>
            <div className="form_box">
                <form action="https://script.google.com/macros/s/AKfycbx-yfWSulvisd127mKAoG0tPElw3JQMKZiFdw4i7UGaw0rID9TDHKJZBaR4C2QXvTHfKw/exec" method="get">
                    <div className="input">
                        <label htmlFor="name">お名前</label>
                        <input type="text" name="name" id="name" required placeholder="例:鈴木太郎"></input>
                    </div>
                    <div className="input">
                        <label htmlFor="email">メールアドレス</label>
                        <input type="email" name="email" id="email" required placeholder="例:example@test.com"></input>
                    </div>
                    <div>
                        <label htmlFor="email">お問い合わせ内容</label>
                        <input type="text" name="body" id="body"></input>
                    </div>
                </form>
                <input type="button" onClick="sendRequest()" value="送信"></input>
            </div>
        </section>
    )
}