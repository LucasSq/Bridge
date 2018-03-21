import { browser, element, by, protractor, $$, $} from 'protractor';

export class HomePage {

  heading = element(by.css("body > app-root > div > h1"))

  OpenBrowser(url: string){
    browser.get(url);
  }

  CheckHeadingText(message: string){
   var text = this.heading.getText();
   expect(text).toMatch(message)
  }
}
