import PageHeader from "../../components/pageHeader";

/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 14:30:47
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 14:31:11
 * @FilePath: /billow-website/pages/forgetpassword/[token].js
 */
const ResetPasswordTokenPage = ({ valid, token }) => {
    const [password, setPassword] = useState('');
    function handleSubmit(event) {
      event.preventDefault();
      fetchSwal
        .post(`/api/user/password/reset/${token}`, { password })
        .then(resp => resp.ok !== false && redirectTo('/'));
    }
  
    return (
      <Layout>
        <PageHeader></PageHeader>
        <h2>Forget password</h2>
        {valid ? (
          <>
            <p>Enter your new password.</p>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="password"
                  placeholder="New password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Set new password</button>
            </form>
          </>
        ) : (
          <p>This link may have been expired</p>
        )}
      </Layout>
    );
  };
  
  ResetPasswordTokenPage.getInitialProps = async ctx => {
    const { token } = ctx.query;
    const valid = await fetch(
      `${process.env.WEB_URI}/api/user/password/reset/${token}`,
      { method: 'POST' }
    )
      .then(res => res.text())
      .then(bol => bol === 'true');
    return { token, valid };
  };
  
  export default ResetPasswordTokenPage;