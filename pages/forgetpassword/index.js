/*
* @Author: Jinqi Li
* @Date: 2021-02-28 14:27:24
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 16:23:32
 * @FilePath: /billow-website/pages/forgetpassword/index.js
*/
import React, {useState} from 'react';
import Head from 'next/head';
import { Button } from "antd";
import 'antd/dist/antd.css'

const ForgetPasswordPage = () => {
    const [msg, setMsg] = useState({ message: '', isError: false });

  async function handleSubmit(e) {
    e.preventDefault(e);

    const body = {
      email: e.currentTarget.email.value,
    };

    const res = await fetch('/api/user/password/reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      setMsg({ message: 'An email has been sent to your mailbox' });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  }

    return (
      <React.Fragment>
        <Head>
          <title>Forget password</title>
        </Head>
        <h2>Forget password</h2>
      {msg.message ? <p style={{ color: msg.isError ? 'red' : '#0070f3', textAlign: 'center' }}>{msg.message}</p> : null}
      <form onSubmit={handleSubmit}>
        <p>Do not worry. Simply enter your email address below.</p>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      </React.Fragment>
    );
  };

  export default ForgetPasswordPage;