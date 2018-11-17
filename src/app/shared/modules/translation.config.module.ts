import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { isNull, isUndefined } from 'lodash';


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '../../../assets/i18n/', '.json');
}

const translationOptions = {
    loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
};

@NgModule({
    imports: [TranslateModule.forRoot(translationOptions), HttpClientModule ],
    exports: [TranslateModule],
    providers: [TranslateService]
})
export class TranslationConfigModule {

    private browserLang;

    /**
     * @param translate {TranslateService}
     */
    constructor(private translate: TranslateService) {
        // Setting up Translations
        translate.addLangs(['en', 'pl']);
        translate.setDefaultLang('en');
        this.browserLang = translate.getBrowserLang();
        translate.use(this.browserLang.match(/en|pl/) ? this.browserLang : 'en');
    }

    public getBrowserLang(){
        if(isUndefined(this.browserLang) || isNull(this.browserLang)){
            this.browserLang = 'en';
        }
        return this.browserLang;
    }
}