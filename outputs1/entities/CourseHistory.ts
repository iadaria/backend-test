import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("CourseHistory_pair_date", ["date", "pair"], {})
@Index("CourseHistory_pkey", ["id"], { unique: true })
@Entity("CourseHistory", { schema: "public" })
export class CourseHistory {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("character varying", { name: "pair", nullable: true, length: 255 })
  pair: string | null;

  @Column("character varying", { name: "min", length: 255 })
  min: string;

  @Column("character varying", { name: "max", length: 255 })
  max: string;

  @Column("character varying", { name: "median", length: 255 })
  median: string;

  @Column("character varying", { name: "medium", length: 255 })
  medium: string;

  @Column("character varying", { name: "date", length: 255 })
  date: string;

  @Column("character varying", { name: "first", length: 255 })
  first: string;

  @Column("character varying", { name: "last", length: 255 })
  last: string;
}
