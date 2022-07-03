import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("FundIndices_pkey", ["id"], { unique: true })
@Entity("FundIndices", { schema: "public" })
export class FundIndices {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "fund", nullable: true, length: 255 })
  fund: string | null;

  @Column("timestamp with time zone", { name: "date", nullable: true })
  date: Date | null;

  @Column("numeric", {
    name: "index",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  index: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("boolean", { name: "is_deleted", default: () => "true" })
  isDeleted: boolean;

  @Column("boolean", { name: "is_old", nullable: true, default: () => "false" })
  isOld: boolean | null;

  @Column("integer", { name: "group", nullable: true })
  group: number | null;
}
