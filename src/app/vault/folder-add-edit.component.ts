import { Component } from '@angular/core';

import { FolderService } from 'jslib/abstractions/folder.service';
import { I18nService } from 'jslib/abstractions/i18n.service';
import { PlatformUtilsService } from 'jslib/abstractions/platformUtils.service';

import {
    FolderAddEditComponent as BaseFolderAddEditComponent,
} from 'jslib/angular/components/folder-add-edit.component';

@Component({
    selector: 'app-folder-add-edit',
    templateUrl: 'folder-add-edit.component.html',
})
export class FolderAddEditComponent extends BaseFolderAddEditComponent {
    constructor(folderService: FolderService, i18nService: I18nService,
        platformUtilsService: PlatformUtilsService) {
        super(folderService, i18nService, platformUtilsService);
    }
}
