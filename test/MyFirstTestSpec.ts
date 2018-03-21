import {browser, element, by, protractor, $$, $} from 'protractor';
import {HomePage} from "./pages/HomePage";

describe("Check heading text", () => {

  it("should show the text: 'Welcome to the app!'", () => {
    var homePage = new HomePage();

    homePage.OpenBrowser("http://localhost:4200/");
    homePage.CheckHeadingText('Welcome to app!')

    })
}
)
