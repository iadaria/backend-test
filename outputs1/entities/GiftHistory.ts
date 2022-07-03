import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "GiftHistory_account_id_account_status_key",
  ["accountId", "accountStatus"],
  { unique: true }
)
@Index("gifthistory_pkey", ["id"], { unique: true })
@Entity("GiftHistory", { schema: "public" })
export class GiftHistory {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "account_id", unique: true })
  accountId: number;

  @Column("character varying", {
    name: "account_status",
    unique: true,
    length: 255,
  })
  accountStatus: string;

  @Column("boolean", {
    name: "is_sent_gift",
    nullable: true,
    default: () => "false",
  })
  isSentGift: boolean | null;

  @Column("text", { name: "gift", nullable: true })
  gift: string | null;

  @Column("text", { name: "delivery_address", nullable: true })
  deliveryAddress: string | null;

  @Column("timestamp with time zone", {
    name: "date_received_status",
    nullable: true,
  })
  dateReceivedStatus: Date | null;

  @Column("timestamp with time zone", {
    name: "departure_date",
    nullable: true,
  })
  departureDate: Date | null;

  @Column("timestamp with time zone", {
    name: "date_of_received",
    nullable: true,
  })
  dateOfReceived: Date | null;

  @Column("numeric", { name: "price_of_delivery", default: () => "0.0" })
  priceOfDelivery: string;

  @Column("text", { name: "comment", nullable: true })
  comment: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
