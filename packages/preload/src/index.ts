import { contextBridge } from 'electron';
import * as emailModule from './modules/email.js';
import * as bitwardenModule from './modules/bitwarden.js';

contextBridge.exposeInMainWorld('emailModule', emailModule);
contextBridge.exposeInMainWorld('bitwardenModule', bitwardenModule);
