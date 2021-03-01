/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 15:17:16
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 15:17:27
 * @FilePath: /billow-website/lib/mail.js
 */
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendMail(msg) {
	try {
		await sgMail.send(msg);
	} catch (e) {
		throw new Error(`Could not send email: ${e.message}`);
	}
}
