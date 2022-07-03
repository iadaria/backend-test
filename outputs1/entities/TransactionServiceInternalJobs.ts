import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("TransactionServiceInternalJobs_pkey", ["id"], { unique: true })
@Entity("TransactionServiceInternalJobs", { schema: "public" })
export class TransactionServiceInternalJobs {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "queueType", length: 255 })
  queueType: string;

  @Column("character varying", { name: "status", length: 255 })
  status: string;

  @Column("character varying", { name: "delay", length: 255 })
  delay: string;

  @Column("jsonb", { name: "data" })
  data: object;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
