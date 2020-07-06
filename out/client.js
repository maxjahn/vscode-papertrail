"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startTail = void 0;
const httpm = require("typed-rest-client/HttpClient");
const vscode = require("vscode");
let httpc = new httpm.HttpClient("vsts-node-api");
let api_endpoint = "https://papertrailapp.com/api/v1/events/search.json";
const wsconf = vscode.workspace.getConfiguration("papertrail");
const conf_token = wsconf.get("token");
const conf_sysid = wsconf.get("system_id");
const conf_grpid = wsconf.get("group_id");
var tail = true;
function startTail(ch) {
    return __awaiter(this, void 0, void 0, function* () {
        let last_id = "";
        if (conf_token === "") {
            vscode.window.showErrorMessage("Papertrail Auth Token missing! Please set token in configuration.");
        }
        while (tail) {
            try {
                let res = yield httpc.get(api_endpoint +
                    "?tail=true&min_id=" +
                    last_id +
                    (conf_sysid === "" ? "" : "&system_id=" + conf_sysid) +
                    (conf_grpid === "" ? "" : "&group_id=" + conf_grpid), {
                    "X-Papertrail-Token": conf_token,
                });
                let body = yield res.readBody();
                var msg = JSON.parse(body);
                var el = "";
                for (el in msg.events) {
                    ch.appendLine(msg["events"][el]["message"]);
                }
                last_id = msg.max_id;
            }
            catch (err) {
                console.error("Failed: " + err.message);
            }
        }
    });
}
exports.startTail = startTail;
// export async function stopTail() {
//   tail = false;
// }
//# sourceMappingURL=client.js.map