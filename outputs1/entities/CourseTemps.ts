import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("CourseTemps_pkey", ["id"], { unique: true })
@Entity("CourseTemps", { schema: "public" })
export class CourseTemps {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("character varying", { name: "pair", length: 255 })
  pair: string;

  @Column("character varying", { name: "value", length: 255 })
  value: string;

  @Column("timestamp with time zone", { name: "date" })
  date: Date;
}
