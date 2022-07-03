import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("SolarHistory_pkey", ["id"], { unique: true })
@Entity("SolarHistory", { schema: "public" })
export class SolarHistory {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "account_id" })
  accountId: number;

  @Column("character varying", { name: "date", length: 255 })
  date: string;

  @Column("character varying", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("integer", { name: "own_processing", nullable: true })
  ownProcessing: number | null;

  @Column("integer", { name: "own_processed", nullable: true })
  ownProcessed: number | null;

  @Column("integer", { name: "own_failed", nullable: true })
  ownFailed: number | null;

  @Column("integer", { name: "own_failing", nullable: true })
  ownFailing: number | null;

  @Column("integer", { name: "ref_processing", nullable: true })
  refProcessing: number | null;

  @Column("integer", { name: "ref_processed", nullable: true })
  refProcessed: number | null;

  @Column("integer", { name: "ref_failed", nullable: true })
  refFailed: number | null;

  @Column("integer", { name: "ref_failing", nullable: true })
  refFailing: number | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
