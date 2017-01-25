/**
 * Created by WittBulter on 2017/1/25.
 */
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {MdeditorComponent} from './component/mdeditor'
import {BackComponent} from './component/back'
import {BreadcrumbComponent} from './component/breadcrumb'
import {ArticleEditorComponent} from './component/article-editor/article-editor.component'
import {ShowdownComponent} from './component/showdown/showdown.component'
import {SanitizeHtmlPipe} from './pipe/sanitize/sanitize-html.pipe'

@NgModule({
    imports: [CommonModule],
    declarations: [
        BackComponent,
        MdeditorComponent,
        ArticleEditorComponent,
        ShowdownComponent,
        SanitizeHtmlPipe,
        BreadcrumbComponent,
    ],
    exports: [CommonModule, FormsModule]
})

export class SharedModule {

}