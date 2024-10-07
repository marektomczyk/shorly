import { Module } from '@nestjs/common';
import { LinksService } from '../services/links.service';
import { RedirectController } from 'src/controllers/redirect/redirect.controller';

@Module({
  controllers: [RedirectController],
  providers: [LinksService],
})
export class RedirectModule {}
