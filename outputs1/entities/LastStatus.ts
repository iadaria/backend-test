import { Column, Entity, Index } from "typeorm";

@Index("LastStatus_account_id_key", ["accountId"], { unique: true })
@Entity("LastStatus", { schema: "public" })
export class LastStatus {
  @Column("integer", { name: "account_id", nullable: true, unique: true })
  accountId: number | null;

  @Column("text", { name: "status", nullable: true })
  status: string | null;

  @Column("numeric", { name: "own_money", nullable: true })
  ownMoney: string | null;

  @Column("boolean", { name: "sunrise_available" })
  sunriseAvailable: boolean;

  @Column("boolean", { name: "sunrise_joined" })
  sunriseJoined: boolean;

  @Column("numeric", { name: "structure_money", nullable: true })
  structureMoney: string | null;

  @Column("numeric", { name: "structure_btc", nullable: true })
  structureBtc: string | null;

  @Column("numeric", { name: "structure_eth", nullable: true })
  structureEth: string | null;

  @Column("numeric", { name: "structure_usdt", nullable: true })
  structureUsdt: string | null;

  @Column("timestamp with time zone", {
    name: "last_update",
    default: () => "now()",
  })
  lastUpdate: Date;
}
