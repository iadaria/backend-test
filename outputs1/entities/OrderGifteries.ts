import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { ProductGifteries } from "./ProductGifteries";

@Index("OrderGifteries_pkey", ["gifteryOrderId", "id", "orderId"], {
  unique: true,
})
@Entity("OrderGifteries", { schema: "public" })
export class OrderGifteries {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { primary: true, name: "order_id" })
  orderId: number;

  @Column("integer", { primary: true, name: "giftery_order_id" })
  gifteryOrderId: number;

  @Column("character varying", { name: "sum", nullable: true, length: 255 })
  sum: string | null;

  @Column("integer", { name: "face", nullable: true })
  face: number | null;

  @Column("character varying", { name: "code", nullable: true, length: 255 })
  code: string | null;

  @Column("character varying", { name: "comment", nullable: true, length: 255 })
  comment: string | null;

  @Column("character varying", { name: "link", nullable: true, length: 255 })
  link: string | null;

  @Column("character varying", {
    name: "external_id",
    nullable: true,
    length: 255,
  })
  externalId: string | null;

  @Column("character varying", {
    name: "testmode",
    nullable: true,
    length: 255,
  })
  testmode: string | null;

  @Column("character varying", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp with time zone", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(
    () => ProductGifteries,
    (productGifteries) => productGifteries.orderGifteries
  )
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: ProductGifteries;
}
