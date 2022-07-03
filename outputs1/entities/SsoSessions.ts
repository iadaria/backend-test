import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ssosessions_pk", ["id"], { unique: true })
@Entity("SsoSessions", { schema: "public" })
export class SsoSessions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("text", { name: "status", nullable: true })
  status: string | null;

  @Column("text", { name: "key", nullable: true })
  key: string | null;

  @Column("timestamp with time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp with time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp with time zone", { name: "last_seen_at", nullable: true })
  lastSeenAt: Date | null;

  @Column("boolean", { name: "is_persistent", nullable: true })
  isPersistent: boolean | null;

  @Column("integer", { name: "expiry_period", nullable: true })
  expiryPeriod: number | null;

  @Column("text", { name: "ip", nullable: true })
  ip: string | null;
}
