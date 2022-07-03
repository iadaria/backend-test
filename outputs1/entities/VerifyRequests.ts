import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("VerifyRequests_pkey", ["id"], { unique: true })
@Entity("VerifyRequests", { schema: "public" })
export class VerifyRequests {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null;

  @Column("enum", {
    name: "status",
    nullable: true,
    enum: ["not_active", "premoderated", "success", "denied"],
  })
  status: "not_active" | "premoderated" | "success" | "denied" | null;

  @Column("timestamp with time zone", { name: "verifiedAt", nullable: true })
  verifiedAt: Date | null;

  @Column("integer", { name: "account_id" })
  accountId: number;

  @Column("integer", { name: "verifier_id", nullable: true })
  verifierId: number | null;

  @Column("text", { name: "reason", nullable: true })
  reason: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
