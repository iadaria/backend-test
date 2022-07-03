import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("VerifyJobs_pkey", ["id"], { unique: true })
@Entity("VerifyJobs", { schema: "public" })
export class VerifyJobs {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("integer", { name: "verifyrequest_id", nullable: true })
  verifyrequestId: number | null;

  @Column("character varying", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
