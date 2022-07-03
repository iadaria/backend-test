import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("TransactionJobs_pkey", ["id"], { unique: true })
@Entity("TransactionJobs", { schema: "public" })
export class TransactionJobs {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "to", length: 255 })
  to: string;

  @Column("numeric", { name: "amount", precision: 80, scale: 40 })
  amount: string;

  @Column("character varying", { name: "type", length: 255 })
  type: string;

  @Column("jsonb", { name: "result", nullable: true })
  result: object | null;

  @Column("integer", { name: "tries", nullable: true, default: () => "0" })
  tries: number | null;

  @Column("character varying", {
    name: "status",
    length: 255,
    default: () => "'scheduled'",
  })
  status: string;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("character varying", { name: "speed", nullable: true, length: 255 })
  speed: string | null;

  @Column("character varying", { name: "fee", nullable: true, length: 255 })
  fee: string | null;

  @Column("character varying", {
    name: "gas_price",
    nullable: true,
    length: 255,
  })
  gasPrice: string | null;
}
