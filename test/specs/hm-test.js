
import LogicPage from '../pageobjects/logic.page.js'

describe('My hamburger menu test application', () => {
        it('should run all hm functions', async () => {
            
            await LogicPage.open()
            await LogicPage.hmFunctions('standard_user','secret_sauce')
            
        });
});

