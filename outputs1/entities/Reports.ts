import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Reports_pkey", ["id"], { unique: true })
@Entity("Reports", { schema: "public" })
export class Reports {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("character varying", { name: "fund", nullable: true, length: 255 })
  fund: string | null;

  @Column("numeric", { name: "change", nullable: true })
  change: string | null;

  @Column("numeric", { name: "change_absolut", nullable: true })
  changeAbsolut: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("numeric", {
    name: "balance_real",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  balanceReal: string | null;

  @Column("numeric", {
    name: "balance_absolut",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  balanceAbsolut: string | null;
}
