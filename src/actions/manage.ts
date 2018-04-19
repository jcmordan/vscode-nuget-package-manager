import { fetchPackages, showSearchBox, handleSearchResponse, } from "./add-methods";
import { showManagePackagesView } from "./show-manage-packages-view";
import * as vscode from 'vscode';


export function managePackages() {

    showManagePackagesView()
        .then(fetchPackages)
        .then(handleSearchResponse)
        .then(data => {

            vscode.commands.executeCommand(
                "vscode.previewHtml",
                'previewUri',
                vscode.ViewColumn.Two,

                "MPE Preview"
            )
                .then(
                    (success) => {
                        // contentProvider.update(previewUri)
                        // the line above is changed to webviewFinishLoading function.
                    },
                    (reason) => {
                        vscode.window.showErrorMessage(reason);
                    },
            );
        })

}