import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("EthereumWallets_pkey", ["id"], { unique: true })
@Entity("EthereumWallets", { schema: "public" })
export class EthereumWallets {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "private", nullable: true, length: 255 })
  private: string | null;

  @Column("character varying", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("integer", { name: "account_id", nullable: true })
  accountId: number | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
