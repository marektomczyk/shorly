import { Test, TestingModule } from '@nestjs/testing';
import { LinksController } from './links.controller';
import { LinksService } from '../../services/links.service';

describe('LinksController', () => {
  let linksController: LinksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LinksController],
      providers: [LinksService],
    }).compile();

    linksController = app.get<LinksController>(LinksController);
  });

  describe('GET api/v1/links', () => {
    it('should return empty Links array', () => {
      expect(linksController.getLinks()).toEqual([]);
    });
  });
});
