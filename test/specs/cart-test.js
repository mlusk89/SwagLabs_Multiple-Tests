
import LogicPage from '../pageobjects/logic.page.js'

describe('My cart test application', () => {
        it('should run all cart functions', async () => {
            
            await LogicPage.open()
            await LogicPage.login('standard_user','secret_sauce')
            
        });
});

