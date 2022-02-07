import { execa } from 'execa';

type BitwardenLoginProps = {
	email: string;
	password: string;
	code: string;
};
export async function login({ email, password, code }: BitwardenLoginProps) {
	if (code === undefined) {
		await execa('bw', ['login', email, password]);
	} else {
		await execa('bw', ['login', email, password, '--code', code]);
	}
}
