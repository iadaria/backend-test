import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Courses_pkey", ["id"], { unique: true })
@Index("Courses_listings_key", ["listings"], { unique: true })
@Index("Courses_pair_key", ["pair"], { unique: true })
@Entity("Courses", { schema: "public" })
export class Courses {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "pair",
    nullable: true,
    unique: true,
    length: 255,
  })
  pair: string | null;

  @Column("character varying", { name: "value", nullable: true, length: 255 })
  value: string | null;

  @Column("jsonb", { name: "listings", nullable: true, unique: true })
  listings: object | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
