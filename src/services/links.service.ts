import { Injectable } from '@nestjs/common';
import { Link } from '../types/link';
import { getShorlyId } from 'src/utils/getShorlyId';
import { db } from 'src/db/db';
import { linksTable } from 'src/db/schema';
import { eq, isNull } from 'drizzle-orm';

@Injectable()
export class LinksService {
  async getAll(): Promise<Link[]> {
    const links = await db
      .select()
      .from(linksTable)
      .where(isNull(linksTable.deletedAt));

    return links.map((link) => {
      return {
        id: link.id,
        sourceUrl: link.sourceUrl,
        createdAt: new Date(link.createdAt),
        updatedAt: new Date(link.updatedAt),
      };
    });
  }

  async getById(id: string): Promise<Link | undefined> {
    const link = await db
      .select()
      .from(linksTable)
      .where(eq(linksTable.id, id))
      .limit(1);

    if (link.length !== 1) return undefined;

    return {
      id: link[0].id,
      sourceUrl: link[0].sourceUrl,
      createdAt: new Date(link[0].createdAt),
      updatedAt: new Date(link[0].updatedAt),
    };
  }

  async getBySourceUrl(sourceUrl: string): Promise<Link | undefined> {
    const link = await db
      .select()
      .from(linksTable)
      .where(eq(linksTable.sourceUrl, sourceUrl))
      .limit(1);

    if (link.length !== 1) return undefined;

    return {
      id: link[0].id,
      sourceUrl: link[0].sourceUrl,
      createdAt: new Date(link[0].createdAt),
      updatedAt: new Date(link[0].updatedAt),
    };
  }

  async create(sourceUrl: string): Promise<Link> {
    const existingLink = await this.getBySourceUrl(sourceUrl);
    if (existingLink) return existingLink;

    const insertValues: typeof linksTable.$inferInsert = {
      id: getShorlyId(),
      sourceUrl: sourceUrl,
    };

    const link = await db.insert(linksTable).values(insertValues).returning();
    if (link.length !== 1) throw new Error('Failed to create link');

    return {
      id: link[0].id,
      sourceUrl: link[0].sourceUrl,
      createdAt: new Date(link[0].createdAt),
      updatedAt: new Date(link[0].updatedAt),
    };
  }
}
