import type * as emailModule from '~p/modules/email';
import type * as bitwardenModule from '~p/modules/bitwarden';

export function useEmailModule() {
	return (window as unknown as { emailModule: typeof emailModule }).emailModule;
}

export function useBitwardenModule() {
	return (window as unknown as { bitwardenModule: typeof bitwardenModule })
		.bitwardenModule;
}
