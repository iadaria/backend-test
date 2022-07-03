import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "wallet_update_requests_address_fund_status",
  ["address", "fund", "status"],
  { unique: true }
)
@Index("WalletUpdateRequests_pkey", ["id"], { unique: true })
@Entity("WalletUpdateRequests", { schema: "public" })
export class WalletUpdateRequests {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "address", length: 255 })
  address: string;

  @Column("enum", {
    name: "status",
    nullable: true,
    enum: ["waiting", "updated"],
  })
  status: "waiting" | "updated" | null;

  @Column("character varying", { name: "fund", nullable: true, length: 255 })
  fund: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
