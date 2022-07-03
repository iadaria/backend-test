import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Articles_pkey", ["id"], { unique: true })
@Entity("Articles", { schema: "public" })
export class Articles {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title", length: 255 })
  title: string;

  @Column("character varying", { name: "body", length: 255 })
  body: string;

  @Column("character varying", { name: "source", nullable: true, length: 255 })
  source: string | null;

  @Column("boolean", { name: "published", nullable: true })
  published: boolean | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "publishedAt", nullable: true })
  publishedAt: Date | null;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
