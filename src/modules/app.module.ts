import { Module } from '@nestjs/common';
import { LinksModule } from './links.module';
import { RedirectModule } from './redirect.module';

@Module({
  imports: [LinksModule, RedirectModule],
})
export class AppModule {}
