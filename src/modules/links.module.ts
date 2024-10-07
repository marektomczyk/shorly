import { Module } from '@nestjs/common';
import { LinksController } from '../controllers/links/links.controller';
import { LinksService } from '../services/links.service';

@Module({
  controllers: [LinksController],
  providers: [LinksService],
})
export class LinksModule {}
