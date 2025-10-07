import React from "react";
import { Form } from "react-router-dom";

export default function Contact(){
    function sendRequest() {
        const api_url = "https://script.google.com/a/macros/multi-school.com/s/AKfycbyEo2xvr807EOkdIJwxb5t864pr_8zXF1UDH_-dX-fUW6q_RixSUCip_3bPAOcTbdRzEA/exec";
        let req = {};
        req.name = document.getElementById('name').value,
        req.email = document.getElementById('email').value,
        req.body = document.getElementById('body').value,
        fetch(api_url, {
            method: "post",
            body: JSON.stringify(req)
        })
        .then((response) => {
            response.json().then((json) => {
                alert(json.message);
            });
        })
        .catch((error) => {
            alert(error.message);
        });
    }
    return(
        <section id="contact">
            <h2>Contact</h2>
            <div className="form_box">
                <Form action="https://script.google.com/a/macros/multi-school.com/s/AKfycbyEo2xvr807EOkdIJwxb5t864pr_8zXF1UDH_-dX-fUW6q_RixSUCip_3bPAOcTbdRzEA/exec" method="get">
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
                </Form>
                <input type="button" onClick={sendRequest()} value="送信"></input>
            </div>
        </section>
    )
}