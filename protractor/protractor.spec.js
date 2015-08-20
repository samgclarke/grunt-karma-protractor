describe('protractor test spec', function() {
  
  it('...', function() {
    browser.get('/');
    button = element(by.css('#click-me'));
    button.click();
    browser.driver.sleep(1000);
    element(by.css('#show-text')).getText().then( function (text) {
      expect(text).toBe('Hello Protractor');
    });
  });

});