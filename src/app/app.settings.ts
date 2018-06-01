import { Injectable } from '@angular/core';
import { Settings } from './app.settings.model';

@Injectable()
export class AppSettings {
    public settings = new Settings(
        'Gradus',
        true,
        true,
        true,
        true,
        'vertical',
        'indigo-light',
        false
    );
}
