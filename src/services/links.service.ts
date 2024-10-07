import { Injectable } from '@nestjs/common';
import { Link } from '../types/link';
import { getShorlyId } from 'src/utils/getShorlyId';

// TODO: move to some database
const links = Array<Link>();

@Injectable()
export class LinksService {
  getAll(): Array<Link> {
    return links;
  }

  getById(id: string): Link | undefined {
    return links.find((link) => link.id === id);
  }

  getBySourceUrl(sourceUrl: string): Link | undefined {
    return links.find((link) => link.sourceUrl === sourceUrl);
  }

  create(sourceUrl: string): Link {
    const existingLink = this.getBySourceUrl(sourceUrl);
    if (existingLink) return existingLink;

    const link: Link = {
      id: getShorlyId(),
      sourceUrl: sourceUrl,
      createdAt: new Date(),
    };

    links.push(link);
    return link;
  }
}
