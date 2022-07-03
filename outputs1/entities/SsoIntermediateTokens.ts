import { Column, Entity, Index } from "typeorm";

@Index("intermediatetokens_pk", ["id"], { unique: true })
@Entity("SSOIntermediateTokens", { schema: "public" })
export class SsoIntermediateTokens {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("text", { name: "service_url", nullable: true })
  serviceUrl: string | null;

  @Column("boolean", { name: "used", nullable: true })
  used: boolean | null;

  @Column("timestamp with time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp with time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
