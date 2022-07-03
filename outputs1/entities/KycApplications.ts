import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("KYCApllication_account_application", ["accountId", "applicationId"], {
  unique: true,
})
@Index("KYCApplications_pkey", ["id"], { unique: true })
@Entity("KYCApplications", { schema: "public" })
export class KycApplications {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("character varying", {
    name: "application_id",
    nullable: true,
    length: 255,
  })
  applicationId: string | null;

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null;

  @Column("character varying", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
