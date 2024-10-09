import { Body, Controller, Get, Post } from '@nestjs/common';
import { LinksService } from '../../services/links.service';
import { Link } from '../../types/link';
import { CreateLinkDto } from './links.controller.dtos';

@Controller('api/v1/links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  async addLink(@Body() dto: CreateLinkDto): Promise<Link> {
    const link = this.linksService.create(dto.url);
    return link;
  }

  @Get()
  async getLinks(): Promise<Link[]> {
    return this.linksService.getAll();
  }
}
