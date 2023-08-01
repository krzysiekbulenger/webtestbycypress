import LoopcloudPage from '../selectors/LoopcloudPage';
  
  describe('loopcloud',{ defaultCommandTimeout: 10000 }, () => {
     let loopcloudPage;
     loopcloudPage = new LoopcloudPage();
  
    it('passes', () => {
      loopcloudPage.visitMainPage();
      loopcloudPage.selectRandomProduct();
      loopcloudPage.assertProductSelected();
      loopcloudPage.selectFiveSamplesFromProduct();
      loopcloudPage.assertFiveSamplesSelected();
      loopcloudPage.filterResultsByHouseAndFree();
      loopcloudPage.assertProperFilter();
      loopcloudPage.setMaxVolume();
      loopcloudPage.expandAndSelectRandomItems();
      loopcloudPage.clearSelectedItems();
    });
  });
  