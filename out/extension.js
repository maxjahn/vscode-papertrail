"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const hc = require("./client");
function activate(context) {
    let ch = vscode.window.createOutputChannel("Papertrail");
    let disposableStart = vscode.commands.registerCommand("papertrail.startPapertrail", () => {
        ch.show(false);
        hc.startTail(ch);
    });
    // let disposableStop = vscode.commands.registerCommand(
    //   "papertrail.stopPapertrail",
    //   () => {
    //     hc.stopTail;
    //   }
    // );
    context.subscriptions.push(disposableStart);
    // context.subscriptions.push(disposableStop);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map