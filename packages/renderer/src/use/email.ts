import type * as emailModule from '~p/modules/email';

export function useEmailModule() {
	return (window as unknown as { emailModule: typeof emailModule }).emailModule;
}
