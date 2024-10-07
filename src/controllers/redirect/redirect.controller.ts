import {
  Controller,
  Get,
  HttpException,
  HttpRedirectResponse,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { LinksService } from 'src/services/links.service';

@Controller()
export class RedirectController {
  constructor(private readonly linksService: LinksService) {}

  @Get('/:id')
  async redirect(@Param('id') id: string): Promise<HttpRedirectResponse> {
    const link = this.linksService.getById(id);
    if (!link) {
      throw new HttpException('Link not found', HttpStatus.NOT_FOUND);
    }

    return { url: link.sourceUrl, statusCode: HttpStatus.MOVED_PERMANENTLY };
  }
}
