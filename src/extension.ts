import * as vscode from 'vscode';

import { addNuGetPackage, removeNuGetPackage, managePackages } from './actions';

export function activate(context: vscode.ExtensionContext) {
    const disposableCommands = [
        vscode.commands.registerCommand('extension.addNuGetPackage', addNuGetPackage),
        vscode.commands.registerCommand('extension.removeNuGetPackage', removeNuGetPackage),
        vscode.commands.registerCommand('extension.manageNuGetPackages', managePackages)
    ];

    disposableCommands.forEach((disposable) => context.subscriptions.push(disposable));
}
