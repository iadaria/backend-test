import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("KYCLogs_pkey", ["id"], { unique: true })
@Entity("KYCLogs", { schema: "public" })
export class KycLogs {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("character varying", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("character varying", {
    name: "applicant_id",
    nullable: true,
    length: 255,
  })
  applicantId: string | null;

  @Column("character varying", {
    name: "applicant_action_id",
    nullable: true,
    length: 255,
  })
  applicantActionId: string | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("boolean", { name: "is_orphaned", nullable: true })
  isOrphaned: boolean | null;
}
