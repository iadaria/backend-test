import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("EthWalletInternalTxsData_pkey", ["id"], { unique: true })
@Entity("EthWalletInternalTxsData", { schema: "public" })
export class EthWalletInternalTxsData {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("integer", { name: "block_number", nullable: true })
  blockNumber: number | null;

  @Column("character varying", { name: "tx_hash", nullable: true, length: 255 })
  txHash: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
