import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("TransferRequests_pkey", ["id"], { unique: true })
@Entity("TransferRequests", { schema: "public" })
export class TransferRequests {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("numeric", { name: "amount", nullable: true })
  amount: string | null;

  @Column("character varying", {
    name: "from_fund",
    nullable: true,
    length: 255,
  })
  fromFund: string | null;

  @Column("character varying", { name: "to_fund", nullable: true, length: 255 })
  toFund: string | null;

  @Column("character varying", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("character varying", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("jsonb", { name: "meta", nullable: true })
  meta: object | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("numeric", {
    name: "target_amount",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  targetAmount: string | null;

  @Column("numeric", {
    name: "course",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  course: string | null;
}
