import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PotentialSolars_pkey", ["id"], { unique: true })
@Entity("PotentialSolars", { schema: "public" })
export class PotentialSolars {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("integer", { name: "account_id" })
  accountId: number;

  @Column("numeric", { name: "sum" })
  sum: string;

  @Column("character varying", { name: "type", length: 255 })
  type: string;

  @Column("character varying", { name: "processDate", length: 255 })
  processDate: string;

  @Column("character varying", { name: "processingDate", length: 255 })
  processingDate: string;

  @Column("boolean", { name: "processed", default: () => "false" })
  processed: boolean;

  @Column("integer", { name: "invalid_date_count", default: () => "0" })
  invalidDateCount: number;

  @Column("boolean", { name: "failed", default: () => "false" })
  failed: boolean;
}
